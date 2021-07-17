import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MComplainsComponent } from './m-complains.component';

describe('MComplainsComponent', () => {
  let component: MComplainsComponent;
  let fixture: ComponentFixture<MComplainsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MComplainsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MComplainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
