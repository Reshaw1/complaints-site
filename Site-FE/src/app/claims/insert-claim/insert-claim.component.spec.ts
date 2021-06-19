import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertClaimComponent } from './insert-claim.component';

describe('InsertClaimComponent', () => {
  let component: InsertClaimComponent;
  let fixture: ComponentFixture<InsertClaimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertClaimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
