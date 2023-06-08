import { Component, } from '@angular/core';
import { LoggingService } from '../shared/logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers : [LoggingService, AccountsService]
})
export class NewAccountComponent {

  constructor(private loggingService : LoggingService, private accountService : AccountsService){}

  onCreateAccount(name : string, status : string){
    this.accountService.addAccount(name, status);
    this.loggingService.logStatusChange(status);
  }
}
