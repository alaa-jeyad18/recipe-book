import { Directive, HostBinding, HostListener, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor(private renderer: Renderer2, private eleRef: ElementRef) { }

  @HostBinding('class.show') isOpen = false;

  @HostListener('click', ['$event'])
  toggleMenu() {
    let part = this.eleRef.nativeElement.querySelector('.dropdown-menu')
    this.isOpen = !this.isOpen
    if(this.isOpen){
      this.renderer.addClass(part,'show')
    }else{
      this.renderer.removeClass(part,'show')
    }
  }

}
