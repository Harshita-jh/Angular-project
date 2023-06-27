import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-employee-assignment-seven',
  templateUrl: './pipes-employee-assignment-seven.component.html',
  styleUrls: ['./pipes-employee-assignment-seven.component.css']
})
export class PipesEmployeeAssignmentSevenComponent {

 employees:any = [
  {empId:101,empName:"rohan ab",empSal:30000,empDesig:"software engineer"},
  {empId:102,empName:"ashmita bs",empSal:40000,empDesig:"senior software engineer"},
  {empId:103,empName:"priyanka ak",empSal:50000,empDesig:"technical lead"},
  {empId:104,empName:"jay sr",empSal:60000,empDesig:"senior manager"}
 ];

}
