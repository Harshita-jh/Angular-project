import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-directives-assignment-five',
  templateUrl: './employee-directives-assignment-five.component.html',
  styleUrls: ['./employee-directives-assignment-five.component.css']
})
export class EmployeeDirectivesAssignmentFiveComponent {
  
  employees:any =[

    {empId:101, empName:"Elena", empSal:40000, empDesig:"SSE", empImg:"assets/Elena.jpeg"},
    {empId:102, empName:"Joy", empSal:30000, empDesig:"SE", empImg:"assets/Joy.jpeg"},
    {empId:103, empName:"John", empSal:20000, empDesig:"ASE", empImg:"assets/John.jpeg"},
    {empId:104, empName:"Michelle", empSal:80000, empDesig:"Lead", empImg:"assets/michelle.jpeg"},
    {empId:105, empName:"Max", empSal:85000, empDesig:"AM", empImg:"assets/Max.jpeg"},
    {empId:106, empName:"James", empSal:90000, empDesig:"Manager", empImg:"assets/James.jpeg"},
   
    
   
    ]
}
