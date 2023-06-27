import { Component } from '@angular/core';

@Component({
  selector: 'app-styles-binding',
  templateUrl: './styles-binding.component.html',
  styleUrls: ['./styles-binding.component.css']
})
export class StylesBindingComponent {
  isApplyClassBinding:boolean = true;

  isApplyStyleBinding:boolean = false;
}
