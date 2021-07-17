import { TestBed } from '@angular/core/testing';

import { ComplainTypeService } from './complain-type.service';

describe('ComplainTypeService', () => {
  let service: ComplainTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComplainTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
