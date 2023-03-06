import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  detailsStatus = false;
  clickLogs = [];
  detailsClick():void{
    this.detailsStatus = !this.detailsStatus;
    this.clickLogs.push("Click number " + this.clickLogs.length);
  }
}
