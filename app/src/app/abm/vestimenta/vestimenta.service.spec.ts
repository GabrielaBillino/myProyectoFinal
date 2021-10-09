import { TestBed } from '@angular/core/testing';

import { VestimentaService } from './vestimenta.service';

describe('VestimentaService', () => {
  let service: VestimentaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VestimentaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
