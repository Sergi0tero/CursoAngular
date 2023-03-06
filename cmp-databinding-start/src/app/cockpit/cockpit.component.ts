import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  @Output() serverCreated = new EventEmitter<{serverName, serverContent}>;
  @Output("newbp") blueprintCreated = new EventEmitter<{blueprintName, blueprintContent}>;
  @ViewChild("serverNameVC", {static : true}) serverNameVC: ElementRef;
  
  newServerName = '';
  newServerContent = '';
  

  // onAddServer(nameInput){
  //   this.serverCreated.emit({serverName : nameInput.value, serverContent : this.newServerContent})
  // }

  // onAddBlueprint(){
  //   this.blueprintCreated.emit({blueprintName : this.newServerName, blueprintContent : this.newServerContent})
  // }
  
  onAddServer(){
    // console.log(this.serverNameVC.nativeElement.value)
    this.serverCreated.emit({serverName : this.serverNameVC.nativeElement.value, serverContent : this.newServerContent})
  }

  onAddBlueprint(){
    this.blueprintCreated.emit({blueprintName : this.serverNameVC.nativeElement.value, blueprintContent : this.newServerContent})
  }

  ngOnInit(): void {
  }

}
