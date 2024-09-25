package services

import (
	"context"

	"github.com/nihi-lo/my-portal/services/gakusimservice"
	"github.com/nihi-lo/my-portal/services/homeservice"
	"github.com/nihi-lo/my-portal/services/portalservice"
)

type Service interface {
	SetContext(ctx context.Context)
}

type Services struct {
	serviceList []Service
}

func NewServices() *Services {
	s := &Services{}

	s.serviceList = append(s.serviceList, gakusimservice.NewService())
	s.serviceList = append(s.serviceList, homeservice.NewService())
	s.serviceList = append(s.serviceList, portalservice.NewService())

	return s
}

func (s *Services) HandleStartup(ctx context.Context) {
	for _, service := range s.serviceList {
		service.SetContext(ctx)
	}
}

func (s *Services) SubApps() []any {
	serviceList := []any{}
	for _, service := range s.serviceList {
		serviceList = append(serviceList, service)
	}

	return serviceList
}
