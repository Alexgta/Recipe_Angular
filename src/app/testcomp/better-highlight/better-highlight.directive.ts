import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  defaultColor = 'transparent';
  highLightColor = 'lightgray';
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elRef: ElementRef, private render: Renderer2) { }

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
    /*this.render.setStyle(this.elRef.nativeElement, 'background-color', 'lightblue');*/
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    /*this.render.setStyle(this.elRef.nativeElement, 'background-color', 'lightblue');*/
    this.backgroundColor = this.highLightColor; /*'lightblue';*/
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    /*this.render.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');*/
    this.backgroundColor = this.defaultColor; /*'transparent';*/
  }

}
