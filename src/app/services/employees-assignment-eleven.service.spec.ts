import { TestBed } from '@angular/core/testing';

import { EmployeesAssignmentElevenService } from './employees-assignment-eleven.service';

describe('EmployeesAssignmentElevenService', () => {
  let service: EmployeesAssignmentElevenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeesAssignmentElevenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
