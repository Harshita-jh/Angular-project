import { Component } from '@angular/core';
import { EmployeesAssignmentElevenService } from '../services/employees-assignment-eleven.service';

@Component({
  selector: 'app-employees-service-assignment-eleven',
  templateUrl: './employees-service-assignment-eleven.component.html',
  styleUrls: ['./employees-service-assignment-eleven.component.css']
})
export class EmployeesServiceAssignmentElevenComponent {

  searchText:string= "";
  

  employees:any = []
  constructor(employeesAssignmentElevenService:EmployeesAssignmentElevenService){
    this.employees = employeesAssignmentElevenService.getEmployeesInfo()
  }
}
