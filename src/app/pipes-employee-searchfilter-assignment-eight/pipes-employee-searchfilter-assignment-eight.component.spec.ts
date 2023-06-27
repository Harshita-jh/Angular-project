import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesEmployeeSearchfilterAssignmentEightComponent } from './pipes-employee-searchfilter-assignment-eight.component';

describe('PipesEmployeeSearchfilterAssignmentEightComponent', () => {
  let component: PipesEmployeeSearchfilterAssignmentEightComponent;
  let fixture: ComponentFixture<PipesEmployeeSearchfilterAssignmentEightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PipesEmployeeSearchfilterAssignmentEightComponent]
    });
    fixture = TestBed.createComponent(PipesEmployeeSearchfilterAssignmentEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
