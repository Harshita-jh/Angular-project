import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesProductSearchfilterAssignmentNineComponent } from './pipes-product-searchfilter-assignment-nine.component';

describe('PipesProductSearchfilterAssignmentNineComponent', () => {
  let component: PipesProductSearchfilterAssignmentNineComponent;
  let fixture: ComponentFixture<PipesProductSearchfilterAssignmentNineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PipesProductSearchfilterAssignmentNineComponent]
    });
    fixture = TestBed.createComponent(PipesProductSearchfilterAssignmentNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
