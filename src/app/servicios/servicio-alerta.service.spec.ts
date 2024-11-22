import { TestBed } from '@angular/core/testing';

import { ServicioAlertaService } from './servicio-alerta.service';

describe('ServicioAlertaService', () => {
  let service: ServicioAlertaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioAlertaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
