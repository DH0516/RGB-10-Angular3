import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDirectOne]'
})
export class DirectOneDirective {

  constructor(private e1: ElementRef) {
      e1.nativeElement.style.backgroundColor = "orange";
      e1.nativeElement.style.fontStyle = "italic";
   }

}
