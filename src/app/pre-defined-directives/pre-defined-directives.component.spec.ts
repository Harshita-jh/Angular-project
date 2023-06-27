import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreDefinedDirectivesComponent } from './pre-defined-directives.component';

describe('PreDefinedDirectivesComponent', () => {
  let component: PreDefinedDirectivesComponent;
  let fixture: ComponentFixture<PreDefinedDirectivesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreDefinedDirectivesComponent]
    });
    fixture = TestBed.createComponent(PreDefinedDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
