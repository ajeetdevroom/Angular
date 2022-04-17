import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomColor]'
})
export class CustomColorDirective {

  constructor(elmt:ElementRef) {
    elmt.nativeElement.style.color="red";
   }

}
