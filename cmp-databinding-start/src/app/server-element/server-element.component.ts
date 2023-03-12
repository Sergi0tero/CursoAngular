import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChange, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('srvElement') element : {type : string, name : string, content: string};
  @Input() name : string;

  constructor() { 
    console.log('constructor called!');
  }

  ngOnChanges(changes : SimpleChanges) {
    console.log("OnChanges called!");
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit called!')
  }

  ngDoCheck(): void{
    console.log('ngDoCheck called!')
  }

  ngAfterContentInit(): void {
      console.log("ngAfterContentInit called!")
  }

  ngAfterContentChecked(): void {
      console.log("NgAfterContentChecked called!")
  }

  ngAfterViewInit(): void {
      console.log("NgAfterContentChecked called!")
  }

  ngAfterViewChecked(): void {
      console.log("NgAfterContentChecked called!")
  }

  ngOnDestroy(): void {
      console.log("ngOnDestroy called!")
  }

}
