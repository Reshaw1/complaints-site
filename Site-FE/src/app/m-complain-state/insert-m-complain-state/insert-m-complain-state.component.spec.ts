import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertMComplainStateComponent } from './insert-m-complain-state.component';

describe('InsertMComplainStateComponent', () => {
  let component: InsertMComplainStateComponent;
  let fixture: ComponentFixture<InsertMComplainStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertMComplainStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertMComplainStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
