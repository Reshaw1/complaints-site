import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertMComplainTypeComponent } from './insert-m-complain-type.component';

describe('InsertMComplainTypeComponent', () => {
  let component: InsertMComplainTypeComponent;
  let fixture: ComponentFixture<InsertMComplainTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertMComplainTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertMComplainTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
