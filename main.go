package main

import (
	"embed"
	"runtime"

	"github.com/nihi-lo/my-portal/services"
	"github.com/wailsapp/wails/v2"
	"github.com/wailsapp/wails/v2/pkg/options"
	"github.com/wailsapp/wails/v2/pkg/options/assetserver"
	"github.com/wailsapp/wails/v2/pkg/options/mac"
)

//go:embed all:frontend/dist
var assets embed.FS

func main() {
	// Create an instance of the app structure
	s := services.NewServices()

	// Create application with options
	err := wails.Run(&options.App{
		Title:     "my-portal",
		Width:     1024,
		Height:    768,
		Frameless: runtime.GOOS == "windows",
		MinWidth:  640,
		MinHeight: 480,
		AssetServer: &assetserver.Options{
			Assets: assets,
		},
		BackgroundColour: &options.RGBA{R: 27, G: 38, B: 54, A: 1},
		OnStartup:        s.HandleStartup,
		CSSDragProperty:  "widows",
		CSSDragValue:     "1",
		Bind:             s.SubApps(),
		Mac: &mac.Options{
			TitleBar: mac.TitleBarHiddenInset(),
		},
	})

	if err != nil {
		println("Error:", err.Error())
	}
}
