import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsDirectivesAssignmentSixComponent } from './products-directives-assignment-six.component';

describe('ProductsDirectivesAssignmentSixComponent', () => {
  let component: ProductsDirectivesAssignmentSixComponent;
  let fixture: ComponentFixture<ProductsDirectivesAssignmentSixComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsDirectivesAssignmentSixComponent]
    });
    fixture = TestBed.createComponent(ProductsDirectivesAssignmentSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
