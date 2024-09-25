package homeservice

import (
	"context"
	"fmt"
)

type Service struct {
	ctx context.Context
}

func NewService() *Service {
	return &Service{}
}

func (s *Service) SetContext(ctx context.Context) {
	s.ctx = ctx
}

func (s *Service) GreetAsync(name string) (string, error) {
	if name == "" {
		return "Oops, there's no name in it! :(", nil
	}
	return fmt.Sprintf("Hello %s, It's show time!", name), nil
}
