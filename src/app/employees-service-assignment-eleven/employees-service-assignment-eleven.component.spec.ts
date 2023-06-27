import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesServiceAssignmentElevenComponent } from './employees-service-assignment-eleven.component';

describe('EmployeesServiceAssignmentElevenComponent', () => {
  let component: EmployeesServiceAssignmentElevenComponent;
  let fixture: ComponentFixture<EmployeesServiceAssignmentElevenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeesServiceAssignmentElevenComponent]
    });
    fixture = TestBed.createComponent(EmployeesServiceAssignmentElevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
