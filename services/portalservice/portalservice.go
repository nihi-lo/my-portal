package portalservice

import (
	"context"
	_ "embed"
	"encoding/json"
	"fmt"
	"io"
	"net"
	"net/http"
	"runtime"
	"strings"

	wailsruntime "github.com/wailsapp/wails/v2/pkg/runtime"
)

type NextAuthSession struct {
	User struct {
		Name  string `json:"name"`
		Email string `json:"email"`
		Image string `json:"image"`
		Id    string `json:"id"`
	} `json:"user"`
	Expires string `json:"expires"`
}

//go:embed auth.html
var authHtml []byte

type Service struct {
	ctx context.Context

	authListener *net.Listener /* 認証プロセスリスナー */
	sessionToken string
}

func NewService() *Service {
	return &Service{}
}

func (s *Service) SetContext(ctx context.Context) {
	s.ctx = ctx
}

func (s *Service) GetOSAsync() string {
	switch runtime.GOOS {
	case "windows":
		return "windows"
	case "darwin":
		return "macos"
	default:
		return "undetermined"
	}
}

func (s *Service) SignInAsync() {
	wailsruntime.EventsEmit(s.ctx, "portal-client.onSessionTokenUpdate", nil, "loading")

	// ブラウザで認証ページを開く
	wailsruntime.BrowserOpenURL(s.ctx, "http://localhost:3000/api/auth/signin")

	// すでに認証プロセスが実行中の場合、ここで終了
	if s.authListener != nil {
		return
	}

	// リスナーを作成
	listener, err := net.Listen("tcp", "localhost:8080")
	if err != nil {
		wailsruntime.EventsEmit(s.ctx, "portal-client.onSessionTokenUpdate", nil, "unauthenticated")
		return
	}
	defer listener.Close()

	s.authListener = &listener
	defer func() {
		s.authListener = nil
	}()

	// 認証サーバーからのコールバックを待つ
	conn, err := listener.Accept()
	if err != nil {
		wailsruntime.EventsEmit(s.ctx, "portal-client.onSessionTokenUpdate", nil, "unauthenticated")
		return
	}
	defer conn.Close()

	// レスポンスを送信
	response := "HTTP/1.1 200 OK\r\n" +
		"Content-Type: text/html\r\n" +
		"Connection: close\r\n" +
		"\r\n" +
		string(authHtml)
	_, err = conn.Write([]byte(response))
	if err != nil {
		wailsruntime.EventsEmit(s.ctx, "portal-client.onSessionTokenUpdate", nil, "unauthenticated")
		return
	}

	// リクエストからセッショントークンを取得
	buffer := make([]byte, 1024)
	n, err := conn.Read(buffer)
	if err != nil {
		wailsruntime.EventsEmit(s.ctx, "portal-client.onSessionTokenUpdate", nil, "unauthenticated")
		return
	}

	headers := strings.Split(string(buffer[:n]), "\r\n")
	for _, header := range headers {
		if strings.HasPrefix(header, "Cookie:") {
			cookies := strings.Split(header[len("Cookie: "):], "; ")
			for _, cookie := range cookies {
				if strings.HasPrefix(cookie, "next-auth.session-token=") {
					s.sessionToken = strings.TrimPrefix(cookie, "next-auth.session-token=")
					break
				}
			}
		}
	}

	// セッショントークンからセッション情報を取得
	session, err := s.getSession(s.sessionToken)
	if err != nil {
		wailsruntime.EventsEmit(s.ctx, "portal-client.onSessionTokenUpdate", nil, "unauthenticated")
		return
	}

	// 取得したセッション情報をクライアントへ通知
	wailsruntime.EventsEmit(s.ctx, "portal-client.onSessionTokenUpdate", session, "authenticated")
}

func (s *Service) UpdateSessionAsync() {
	wailsruntime.EventsEmit(s.ctx, "portal-client.onSessionTokenUpdate", nil, "loading")

	if s.sessionToken == "" {
		wailsruntime.EventsEmit(s.ctx, "portal-client.onSessionTokenUpdate", nil, "unauthenticated")
		return
	}

	session, err := s.getSession(s.sessionToken)
	if err != nil {
		wailsruntime.EventsEmit(s.ctx, "portal-client.onSessionTokenUpdate", nil, "unauthenticated")
		return
	}

	wailsruntime.EventsEmit(s.ctx, "portal-client.onSessionTokenUpdate", session, "authenticated")
}

func (s *Service) getSession(sessionToken string) (NextAuthSession, error) {
	var session NextAuthSession

	req, err := http.NewRequest("GET", "http://localhost:3000/api/auth/session", nil)
	if err != nil {
		return session, fmt.Errorf("error creating request: %w", err)
	}
	req.Header.Set("Accept", "application/json")
	req.Header.Set("User-Agent", "MyPortalClient/1.0.0")
	req.Header.Set("Cookie", "next-auth.session-token="+sessionToken+";")

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		return session, fmt.Errorf("error making request: %w", err)
	}
	defer func() {
		io.Copy(io.Discard, resp.Body)
		resp.Body.Close()
	}()

	body, _ := io.ReadAll(resp.Body)
	if err := json.Unmarshal(body, &session); err != nil {
		return session, fmt.Errorf("error: %w", err)
	}

	return session, nil
}
