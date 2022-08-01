import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appdropdown]'
})

export class DropdownDirective {
    @HostBinding('class.Open') isOpen = false; 

    @HostListener('click') toggleOpen () {
    this.isOpen = !this.isOpen;
}
}