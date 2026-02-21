import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
    selector: '[scrollReveal]',
    standalone: true
})
export class ScrollRevealDirective implements OnInit {
    constructor(private el: ElementRef) { }

    ngOnInit() {
        this.checkVisibility();
    }

    @HostListener('window:scroll', [])
    onWindowScroll() {
        this.checkVisibility();
    }

    private checkVisibility() {
        const rect = this.el.nativeElement.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        // Element is visible when it's in the viewport
        if (rect.top <= windowHeight * 0.85 && rect.bottom >= 0) {
            this.el.nativeElement.classList.add('revealed');
        }
    }
}
