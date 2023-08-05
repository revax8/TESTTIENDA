import { TestBed } from '@angular/core/testing';

import { ClienteArticuloService } from './cliente-articulo.service';

describe('ClienteArticuloService', () => {
  let service: ClienteArticuloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClienteArticuloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
