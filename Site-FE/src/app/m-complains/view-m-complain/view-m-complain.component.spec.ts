import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMComplainComponent } from './view-m-complain.component';

describe('ViewMComplainComponent', () => {
  let component: ViewMComplainComponent;
  let fixture: ComponentFixture<ViewMComplainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMComplainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMComplainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
