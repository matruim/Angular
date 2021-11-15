import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  private showClass = 'show'
  private menu;

  @HostListener('click') toggleOpen(){
    this.menu.classList.toggle(this.showClass)
  }
  constructor(private elRef: ElementRef) {
  }

  ngOnInit(){
    this.menu = this.elRef.nativeElement.nextElementSibling;
    document.getElementsByTagName('body')[0].addEventListener('click', event =>{
      if(event.target != this.elRef.nativeElement){
        if(this.menu.classList.contains(this.showClass)){
          this.toggleOpen();
        }
      }
    })
  }

}
