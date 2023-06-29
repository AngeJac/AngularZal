import { TestBed } from '@angular/core/testing';

import { ClearDataGuard } from './clear-data.guard';

describe('ClearDataGuard', () => {
  let guard: ClearDataGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ClearDataGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
