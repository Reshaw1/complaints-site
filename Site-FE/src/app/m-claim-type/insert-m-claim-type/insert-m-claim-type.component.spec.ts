import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertMClaimTypeComponent } from './insert-m-claim-type.component';

describe('InsertMClaimTypeComponent', () => {
  let component: InsertMClaimTypeComponent;
  let fixture: ComponentFixture<InsertMClaimTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertMClaimTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertMClaimTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
