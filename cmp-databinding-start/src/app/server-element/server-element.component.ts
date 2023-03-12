import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, 
  Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, 
AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('srvElement') element : {type : string, name : string, content: string};
  @Input() name : string;
  @ViewChild("heading") header: ElementRef;
  @ContentChild("contentParagraph", {static: true}) paragraph: ElementRef;

  constructor() { 
    console.log('constructor called!');
  }

  ngOnChanges(changes : SimpleChanges) {
    console.log("OnChanges called!");
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit called!');
    console.log("Text content: " + this.header.nativeElement.textContent);
    console.log("Text content of paragraph " + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck(): void{
    console.log('ngDoCheck called!');
  }

  ngAfterContentInit(): void {
      console.log("ngAfterContentInit called!");
      console.log("Text content of paragraph " + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked(): void {
      console.log("NgAfterContentChecked called!");
  }

  ngAfterViewInit(): void {
      console.log("NgAfterContentChecked called!");
      console.log("Text content: " + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked(): void {
      console.log("NgAfterContentChecked called!");
  }

  ngOnDestroy(): void {
      console.log("ngOnDestroy called!");
  }

}
