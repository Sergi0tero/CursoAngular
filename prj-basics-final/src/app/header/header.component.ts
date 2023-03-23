import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() section = new EventEmitter<string>;

  onOutPutSection(sectionName:string) {
    this.section.emit(sectionName);
  }
}
