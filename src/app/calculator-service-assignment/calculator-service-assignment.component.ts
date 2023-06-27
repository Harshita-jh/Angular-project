import { Component } from '@angular/core';
import { CalculatorAssignmentService } from '../services/calculator-assignment.service';

@Component({
  selector: 'app-calculator-service-assignment',
  templateUrl: './calculator-service-assignment.component.html',
  styleUrls: ['./calculator-service-assignment.component.css']
})
export class CalculatorServiceAssignmentComponent {

  result:any;
  
  constructor(private calc:CalculatorAssignmentService){}
  addOperation(firstNumber:any, secondNumber:any){

    this.result = this.calc.addOperation(firstNumber, secondNumber);

  }

 

  subOperation(firstNumber:any, secondNumber:any){

    this.result = this.calc.subOperation(firstNumber, secondNumber);

  }

  mulOperation(firstNumber:any, secondNumber:any){

    this.result = this.calc.mulOperation(firstNumber, secondNumber);

  }

  divOperation(firstNumber:any, secondNumber:any){

    this.result = this.calc.divOperation(firstNumber, secondNumber);

  }
}
