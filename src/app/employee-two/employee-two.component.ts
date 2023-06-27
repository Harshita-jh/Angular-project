import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-two',
  templateUrl: './employee-two.component.html',
  styleUrls: ['./employee-two.component.css']
})
export class EmployeeTwoComponent {
  employeedetails:any = 
  {
    name:"Rohan",
    id:123456,
    age:30,
    salary:60700,
  }
}
