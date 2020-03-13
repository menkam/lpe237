import { TestBed } from '@angular/core/testing';

import { GroupeutilisateursService } from './groupeutilisateurs.service';

describe('GroupeutilisateursService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GroupeutilisateursService = TestBed.get(GroupeutilisateursService);
    expect(service).toBeTruthy();
  });
});
