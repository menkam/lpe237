import { TestBed } from '@angular/core/testing';

import { GestionscachetService } from './gestionscachet.service';

describe('GestionscachetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GestionscachetService = TestBed.get(GestionscachetService);
    expect(service).toBeTruthy();
  });
});
