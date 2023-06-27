import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDirectivesAssignmentFiveComponent } from './employee-directives-assignment-five.component';

describe('EmployeeDirectivesAssignmentFiveComponent', () => {
  let component: EmployeeDirectivesAssignmentFiveComponent;
  let fixture: ComponentFixture<EmployeeDirectivesAssignmentFiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeDirectivesAssignmentFiveComponent]
    });
    fixture = TestBed.createComponent(EmployeeDirectivesAssignmentFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
