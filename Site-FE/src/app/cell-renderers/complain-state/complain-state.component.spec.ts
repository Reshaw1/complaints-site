import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplainStateComponent } from './complain-state.component';

describe('ComplainStateComponent', () => {
  let component: ComplainStateComponent;
  let fixture: ComponentFixture<ComplainStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplainStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplainStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
