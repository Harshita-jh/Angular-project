import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeThreeComponent } from './employee-three.component';

describe('EmployeeThreeComponent', () => {
  let component: EmployeeThreeComponent;
  let fixture: ComponentFixture<EmployeeThreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeThreeComponent]
    });
    fixture = TestBed.createComponent(EmployeeThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
