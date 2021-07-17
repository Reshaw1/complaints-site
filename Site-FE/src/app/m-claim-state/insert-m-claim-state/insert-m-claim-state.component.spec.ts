import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertMClaimStateComponent } from './insert-m-claim-state.component';

describe('InsertMClaimStateComponent', () => {
  let component: InsertMClaimStateComponent;
  let fixture: ComponentFixture<InsertMClaimStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertMClaimStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertMClaimStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
