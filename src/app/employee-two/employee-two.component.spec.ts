import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeTwoComponent } from './employee-two.component';

describe('EmployeeTwoComponent', () => {
  let component: EmployeeTwoComponent;
  let fixture: ComponentFixture<EmployeeTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeTwoComponent]
    });
    fixture = TestBed.createComponent(EmployeeTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
