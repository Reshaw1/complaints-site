import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MClaimsComponent } from './m-claims.component';

describe('MClaimsComponent', () => {
  let component: MClaimsComponent;
  let fixture: ComponentFixture<MClaimsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MClaimsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MClaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
