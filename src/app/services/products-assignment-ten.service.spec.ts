import { TestBed } from '@angular/core/testing';

import { ProductsAssignmentTenService } from './products-assignment-ten.service';

describe('ProductsAssignmentTenService', () => {
  let service: ProductsAssignmentTenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsAssignmentTenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
