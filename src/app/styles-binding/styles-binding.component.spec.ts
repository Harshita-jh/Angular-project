import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StylesBindingComponent } from './styles-binding.component';

describe('StylesBindingComponent', () => {
  let component: StylesBindingComponent;
  let fixture: ComponentFixture<StylesBindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StylesBindingComponent]
    });
    fixture = TestBed.createComponent(StylesBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
