import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation-binding',
  templateUrl: './interpolation-binding.component.html',
  styleUrls: ['./interpolation-binding.component.css']
})
export class InterpolationBindingComponent {
  productName:string = "Samsung AC"
  productPrice:number = 40000
  callFunc(){
  console.log('calling function...')
  }
}
