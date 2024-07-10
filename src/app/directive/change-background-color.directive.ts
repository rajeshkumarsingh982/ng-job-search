import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeBackgroundColor]',
  standalone: true
})
export class ChangeBackgroundColorDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('click') onClick() {
    this.el.nativeElement.style.backgroundColor = 'Blue'; // Change color as needed
    this.el.nativeElement.style.color = 'white'; // Change color as neede
  }

  @HostListener('focusout') onFocusOut() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', '');
    this.renderer.setStyle(this.el.nativeElement, 'color', '');
  }

}
