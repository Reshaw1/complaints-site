import { TestBed } from '@angular/core/testing';

import { ComplainStateService } from './complain-state.service';

describe('ComplainStateService', () => {
  let service: ComplainStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComplainStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
