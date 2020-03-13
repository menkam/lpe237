import { TestBed } from '@angular/core/testing';

import { ParametreprofileService } from './parametreprofile.service';

describe('ParametreprofileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParametreprofileService = TestBed.get(ParametreprofileService);
    expect(service).toBeTruthy();
  });
});
