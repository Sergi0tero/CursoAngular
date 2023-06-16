import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from '../services/UserService.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  users: string[];

  constructor(private userService : UserService){
    
  }

  ngOnInit(): void {
      this.users = this.userService.inactiveUsers;
  }

  onSetToActive(id){
      this.userService.onSetToActive(id);
  }
}
