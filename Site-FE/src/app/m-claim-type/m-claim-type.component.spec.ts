import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MClaimTypeComponent } from './m-claim-type.component';

describe('MClaimTypeComponent', () => {
  let component: MClaimTypeComponent;
  let fixture: ComponentFixture<MClaimTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MClaimTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MClaimTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
