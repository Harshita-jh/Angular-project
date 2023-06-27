import { TestBed } from '@angular/core/testing';

import { ProductsJsonAssignmentService } from './products-json-assignment.service';

describe('ProductsJsonAssignmentService', () => {
  let service: ProductsJsonAssignmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsJsonAssignmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
