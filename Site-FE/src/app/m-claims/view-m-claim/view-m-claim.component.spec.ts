import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMClaimComponent } from './view-m-claim.component';

describe('ViewMClaimComponent', () => {
  let component: ViewMClaimComponent;
  let fixture: ComponentFixture<ViewMClaimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMClaimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
