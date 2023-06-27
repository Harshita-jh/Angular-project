import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBindingAssignmentFourComponent } from './event-binding-assignment-four.component';

describe('EventBindingAssignmentFourComponent', () => {
  let component: EventBindingAssignmentFourComponent;
  let fixture: ComponentFixture<EventBindingAssignmentFourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventBindingAssignmentFourComponent]
    });
    fixture = TestBed.createComponent(EventBindingAssignmentFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
