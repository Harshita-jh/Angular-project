import { Component } from '@angular/core';

@Component({
  selector: 'app-pre-defined-pipes',
  templateUrl: './pre-defined-pipes.component.html',
  styleUrls: ['./pre-defined-pipes.component.css']
})
export class PreDefinedPipesComponent {
  myName:string = "harshita jha"

  myDate:any = new Date()

  myAmount:number = 23000

  product:object = {

    productId:101,

    productName:'samsung tv'

  }
}
