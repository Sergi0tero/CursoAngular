import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = "";
  UsernameIsEmpty = function() : boolean{
    return this.username.length == 0;
  }
  resetUsername = function() : void{
    this.username = "";
  }
}
