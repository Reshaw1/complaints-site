import { TestBed } from '@angular/core/testing';

import { ClaimStateService } from './claim-state.service';

describe('ClaimStateService', () => {
  let service: ClaimStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClaimStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
