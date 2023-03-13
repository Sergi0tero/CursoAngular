import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output("timer") outputTimer = new EventEmitter<number>();
  interval;
  timer:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  startGame():void{
    this.interval = setInterval(() => {
      this.timer += 1;
      this.outputTimer.emit(this.timer);
    }, 1000);
  }

  stopGame():void{
    clearInterval(this.interval);
  }

}
