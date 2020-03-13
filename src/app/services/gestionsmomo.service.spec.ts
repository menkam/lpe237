import { TestBed } from '@angular/core/testing';

import { GestionsmomoService } from './gestionsmomo.service';

describe('GestionsmomoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GestionsmomoService = TestBed.get(GestionsmomoService);
    expect(service).toBeTruthy();
  });
});
