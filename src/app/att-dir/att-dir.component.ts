import { Component } from '@angular/core';

@Component({
  selector: 'app-att-dir',
  templateUrl: './att-dir.component.html',
  styleUrls: ['./att-dir.component.css']
})
export class AttDirComponent {
  isclassOneApply:boolean = true;

  isClassTwoApply:boolean = false;

  myColor:string = 'blue'

  myFontSize:string = '30px'
}
