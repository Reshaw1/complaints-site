import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertComplainComponent } from './insert-complain.component';

describe('InsertComplainComponent', () => {
  let component: InsertComplainComponent;
  let fixture: ComponentFixture<InsertComplainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertComplainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertComplainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
