import { TestBed } from '@angular/core/testing';

import { ServPedidoService } from './serv-pedido.service';

describe('ServPedidoService', () => {
  let service: ServPedidoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServPedidoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
