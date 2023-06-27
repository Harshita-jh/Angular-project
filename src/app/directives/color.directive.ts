import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({

  selector: '[appColor]'

})

export class ColorDirective {

  constructor(elRef:ElementRef, rend2:Renderer2) {

    // elRef.nativeElement.style.color='red'

    // elRef.nativeElement.style.backgroundColor='gold'

    // elRef.nativeElement.style.fontSize='29px'

    rend2.addClass(elRef.nativeElement, 'myClass')

  }

}