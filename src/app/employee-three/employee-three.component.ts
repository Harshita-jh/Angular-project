import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-three',
  templateUrl: './employee-three.component.html',
  styleUrls: ['./employee-three.component.css']
})
export class EmployeeThreeComponent {
  
  imagePath = "assets/download.png";
  emppid:number= 101;
  empName:String="Harshita"
  empAge:number= 30;
  empSalary:number=20000;
}

  
  


