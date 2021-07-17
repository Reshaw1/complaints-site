import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MClaimStateComponent } from './m-claim-state.component';

describe('MClaimStateComponent', () => {
  let component: MClaimStateComponent;
  let fixture: ComponentFixture<MClaimStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MClaimStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MClaimStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
