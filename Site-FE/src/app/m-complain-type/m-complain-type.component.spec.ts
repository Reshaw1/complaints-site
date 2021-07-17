import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MComplainTypeComponent } from './m-complain-type.component';

describe('MComplainTypeComponent', () => {
  let component: MComplainTypeComponent;
  let fixture: ComponentFixture<MComplainTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MComplainTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MComplainTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
