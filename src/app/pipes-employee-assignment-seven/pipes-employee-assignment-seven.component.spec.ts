import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesEmployeeAssignmentSevenComponent } from './pipes-employee-assignment-seven.component';

describe('PipesEmployeeAssignmentSevenComponent', () => {
  let component: PipesEmployeeAssignmentSevenComponent;
  let fixture: ComponentFixture<PipesEmployeeAssignmentSevenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PipesEmployeeAssignmentSevenComponent]
    });
    fixture = TestBed.createComponent(PipesEmployeeAssignmentSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
