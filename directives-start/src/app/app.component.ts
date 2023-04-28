import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  odd = [2, 4];
  even = [1, 3, 5];
  onlyOdd = false;
}
