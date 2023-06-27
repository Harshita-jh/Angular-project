import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding-assignment-four',
  templateUrl: './event-binding-assignment-four.component.html',
  styleUrls: ['./event-binding-assignment-four.component.css']
})
export class EventBindingAssignmentFourComponent {
  result:any;

addOperation(firstNumber:any, secondNumber:any){

 this.result = Number(firstNumber)+Number(secondNumber)

}
subOperation(firstNumber:any, secondNumber:any){

  this.result = Number(firstNumber)-Number(secondNumber)
 
 }
 mulOperation(firstNumber:any, secondNumber:any){

  this.result = Number(firstNumber)*Number(secondNumber)
 
 }
 divOperation(firstNumber:any, secondNumber:any){

  this.result = Number(firstNumber)/Number(secondNumber)
 
 }
}
