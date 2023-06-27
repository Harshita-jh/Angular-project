import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttDirComponent } from './att-dir.component';

describe('AttDirComponent', () => {
  let component: AttDirComponent;
  let fixture: ComponentFixture<AttDirComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttDirComponent]
    });
    fixture = TestBed.createComponent(AttDirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
