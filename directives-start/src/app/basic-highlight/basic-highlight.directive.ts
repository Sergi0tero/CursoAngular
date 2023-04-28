import { Directive, ElementRef, OnInit } from "@angular/core";
@Directive({
    selector : "[appBasicHighLight]", 
})
export class BasicHighlightDirective implements OnInit{
    constructor(private elementRef : ElementRef){
    }

    ngOnInit(): void {
        console.log(this.elementRef.nativeElement)
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }
}