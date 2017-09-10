import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
    selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

    constructor(private elRef: ElementRef, private renderer: Renderer2) { }

    ngOnInit() {
        this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black');

    }

    @HostListener('mouseenter') mouseover(eventData: Event) {

       this.renderer.setStyle(this.elRef.nativeElement, 'color', 'red');
    }
    @HostListener('mouseleave') mouseleave(eventData: Event) {

        this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black');
    }

}
