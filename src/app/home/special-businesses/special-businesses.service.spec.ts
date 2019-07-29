import { TestBed } from '@angular/core/testing';

import { SpecialBusinessesService } from './special-businesses.service';

describe('SpecialBusinessesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpecialBusinessesService = TestBed.get(SpecialBusinessesService);
    expect(service).toBeTruthy();
  });
});
