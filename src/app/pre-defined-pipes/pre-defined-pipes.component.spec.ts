import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreDefinedPipesComponent } from './pre-defined-pipes.component';

describe('PreDefinedPipesComponent', () => {
  let component: PreDefinedPipesComponent;
  let fixture: ComponentFixture<PreDefinedPipesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreDefinedPipesComponent]
    });
    fixture = TestBed.createComponent(PreDefinedPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
