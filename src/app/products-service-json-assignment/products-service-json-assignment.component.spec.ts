import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsServiceJsonAssignmentComponent } from './products-service-json-assignment.component';

describe('ProductsServiceJsonAssignmentComponent', () => {
  let component: ProductsServiceJsonAssignmentComponent;
  let fixture: ComponentFixture<ProductsServiceJsonAssignmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsServiceJsonAssignmentComponent]
    });
    fixture = TestBed.createComponent(ProductsServiceJsonAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
