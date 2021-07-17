import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMComplainStateComponent } from './view-m-complain-state.component';

describe('ViewMComplainStateComponent', () => {
  let component: ViewMComplainStateComponent;
  let fixture: ComponentFixture<ViewMComplainStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMComplainStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMComplainStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
