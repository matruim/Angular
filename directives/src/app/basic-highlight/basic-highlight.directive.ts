import {Directive, ElementRef, OnInit} from "@angular/core";

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit{
  constructor(private elementRef: ElementRef) {}

  ngOnInit(){
    this.elementRef.nativeElement.style.backgroundColor = 'forestgreen'
    this.elementRef.nativeElement.style.color = '#F0EAD6'
  }
}
