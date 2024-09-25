package gakusimservice

import (
	"context"

	"github.com/nihi-lo/my-portal/services/gakusimservice/registry"
)

type Service struct {
	ctx      context.Context
	registry *registry.Registry
}

func NewService() *Service {
	r, _ := registry.NewRegistry()

	return &Service{
		registry: r,
	}
}

func (s *Service) SetContext(ctx context.Context) {
	s.ctx = ctx
}

func (s *Service) SimulateContestAsync() (string, error) {
	return s.registry.ContestController.SimulateContest()
}
