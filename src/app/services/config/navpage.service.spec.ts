import { TestBed } from '@angular/core/testing';

import { NavpageService } from './navpage.service';

describe('NavpageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NavpageService = TestBed.get(NavpageService);
    expect(service).toBeTruthy();
  });
});
