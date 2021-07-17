import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMComplainTypeComponent } from './view-m-complain-type.component';

describe('ViewMComplainTypeComponent', () => {
  let component: ViewMComplainTypeComponent;
  let fixture: ComponentFixture<ViewMComplainTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMComplainTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMComplainTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
