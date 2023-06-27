import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorServiceAssignmentComponent } from './calculator-service-assignment.component';

describe('CalculatorServiceAssignmentComponent', () => {
  let component: CalculatorServiceAssignmentComponent;
  let fixture: ComponentFixture<CalculatorServiceAssignmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculatorServiceAssignmentComponent]
    });
    fixture = TestBed.createComponent(CalculatorServiceAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
