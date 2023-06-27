import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-employee-searchfilter-assignment-eight',
  templateUrl: './pipes-employee-searchfilter-assignment-eight.component.html',
  styleUrls: ['./pipes-employee-searchfilter-assignment-eight.component.css']
})
export class PipesEmployeeSearchfilterAssignmentEightComponent {

  searchText:string= "";
  employees:any =[

    {empId:101, empName:"Elena", empSal:40000, empDesig:"senior software engineer", empImg:"assets/Elena.jpeg"},
    {empId:102, empName:"Joy", empSal:30000, empDesig:"software engineer", empImg:"assets/Joy.jpeg"},
    {empId:103, empName:"John", empSal:20000, empDesig:"trainee", empImg:"assets/John.jpeg"},
    {empId:104, empName:"Michelle", empSal:80000, empDesig:"technical lead", empImg:"assets/michelle.jpeg"},
    {empId:105, empName:"Max", empSal:85000, empDesig:"associate manager", empImg:"assets/Max.jpeg"},
    {empId:106, empName:"James", empSal:90000, empDesig:"manager", empImg:"assets/James.jpeg"},
   
    
   
    ]
}
