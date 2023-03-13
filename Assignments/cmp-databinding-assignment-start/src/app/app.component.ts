import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbers = [];

  onOutputTimer(timer):void{
    this.numbers.push(timer);
  }

  isEvenNumber(num:number){
    return num % 2 == 0;
  }
}
