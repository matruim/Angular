import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @Input() defaultColor: string = 'transparent'
  @Input() highlightColor: string = 'skyblue'
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'dodgerblue');
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover($eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'skyblue');
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave($eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }
}
