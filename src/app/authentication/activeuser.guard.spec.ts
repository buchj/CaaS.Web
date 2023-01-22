import { TestBed } from '@angular/core/testing';

import { ActiveuserGuard } from './activeuser.guard';

describe('ActiveuserGuard', () => {
  let guard: ActiveuserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ActiveuserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
