import { Component } from '@angular/core';

@Component({
  selector: 'app-pre-defined-directives',
  templateUrl: './pre-defined-directives.component.html',
  styleUrls: ['./pre-defined-directives.component.css']
})
export class PreDefinedDirectivesComponent {
  showElement:Boolean = false
  course:string = "angular";
  users:string[] = ['chiru', 'vihaan', 'varshini']

products =[

 {productId:101, productName:"samsung tv", productPrice:20000},

 {productId:102, productName:"lg tv", productPrice:10000},

 {productId:103, productName:"oneplus tv", productPrice:30000}

 ]
}
