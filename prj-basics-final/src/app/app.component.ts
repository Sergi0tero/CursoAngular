import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  section = "Recipes";
  prueba(newsec){
    this.section = newsec;
    console.log(this.section)
  }
}
