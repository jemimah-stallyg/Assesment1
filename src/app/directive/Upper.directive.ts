import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[upper]'
})

export class UpperDirective {
    @HostBinding('class.Open') upperCase = false; 

    @HostListener('click') UpperCaseText () {
    this.upperCase = !this.upperCase;
}
}