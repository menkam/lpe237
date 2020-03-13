import { TestBed } from '@angular/core/testing';

import { GestionsphotoService } from './gestionsphoto.service';

describe('GestionsphotoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GestionsphotoService = TestBed.get(GestionsphotoService);
    expect(service).toBeTruthy();
  });
});
