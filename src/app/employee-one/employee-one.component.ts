import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-one',
  templateUrl: './employee-one.component.html',
  styleUrls: ['./employee-one.component.css']
})
export class EmployeeOneComponent {
empId:String = "001"
empName:String = "Rohan"
empAge:number = 30;
empSalary:number = 40000;
}
