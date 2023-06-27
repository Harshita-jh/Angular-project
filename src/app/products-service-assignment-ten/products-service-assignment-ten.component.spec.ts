import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsServiceAssignmentTenComponent } from './products-service-assignment-ten.component';

describe('ProductsServiceAssignmentTenComponent', () => {
  let component: ProductsServiceAssignmentTenComponent;
  let fixture: ComponentFixture<ProductsServiceAssignmentTenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsServiceAssignmentTenComponent]
    });
    fixture = TestBed.createComponent(ProductsServiceAssignmentTenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
