import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMClaimTypeComponent } from './view-m-claim-type.component';

describe('ViewMClaimTypeComponent', () => {
  let component: ViewMClaimTypeComponent;
  let fixture: ComponentFixture<ViewMClaimTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMClaimTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMClaimTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
