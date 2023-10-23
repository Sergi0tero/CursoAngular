import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('myForm') myForm : NgForm;
  defaultSub = 'Advanced';
  subscriptions = [ 'Basic', 'Advanced', 'Pro' ];
  submited = false;
  userData = {
    email : "",
    subscription : "",
    password : ""
  }

  onSubmitForm(){
    this.submited = true;
    this.userData.email = this.myForm.value.mail;
    this.userData.subscription = this.myForm.value.subscription;
    this.userData.password = this.myForm.value.pswd;
    this.myForm.reset();
    console.log(this.myForm);
  }

}
