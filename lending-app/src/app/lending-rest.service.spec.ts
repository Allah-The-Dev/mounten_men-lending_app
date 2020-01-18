import { TestBed } from '@angular/core/testing';

import { LendingRestService } from './lending-rest.service';

describe('LendingRestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LendingRestService = TestBed.get(LendingRestService);
    expect(service).toBeTruthy();
  });
});
