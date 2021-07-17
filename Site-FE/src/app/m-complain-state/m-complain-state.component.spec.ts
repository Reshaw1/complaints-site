import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MComplainStateComponent } from './m-complain-state.component';

describe('MComplainStateComponent', () => {
  let component: MComplainStateComponent;
  let fixture: ComponentFixture<MComplainStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MComplainStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MComplainStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
