import { TestBed } from '@angular/core/testing';

import { GestionspersonnelleService } from './gestionspersonnelle.service';

describe('GestionspersonnelleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GestionspersonnelleService = TestBed.get(GestionspersonnelleService);
    expect(service).toBeTruthy();
  });
});
