import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMClaimStateComponent } from './view-m-claim-state.component';

describe('ViewMClaimStateComponent', () => {
  let component: ViewMClaimStateComponent;
  let fixture: ComponentFixture<ViewMClaimStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMClaimStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMClaimStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
