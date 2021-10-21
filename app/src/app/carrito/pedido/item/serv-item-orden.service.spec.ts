import { TestBed } from '@angular/core/testing';

import { ServItemOrdenService } from './serv-item-orden.service';

describe('ServItemOrdenService', () => {
  let service: ServItemOrdenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServItemOrdenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
