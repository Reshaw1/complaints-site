import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimStateComponent } from './claim-state.component';

describe('ClaimStateComponent', () => {
  let component: ClaimStateComponent;
  let fixture: ComponentFixture<ClaimStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
