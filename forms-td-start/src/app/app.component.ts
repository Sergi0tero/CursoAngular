import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signUpForm : NgForm;
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female'];
  submitted = false;
  user = {
    username : '',
    mail: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  }
  
  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signUpForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // });
    this.signUpForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  // onSubmit(form : NgForm){
  //   console.log(form);
  // }

  onSubmit(){
    this.submitted = true;
    this.user.username = this.signUpForm.value.userData.username;
    this.user.mail = this.signUpForm.value.userData.email;
    this.user.secretQuestion = this.signUpForm.value.secret;
    this.user.answer = this.signUpForm.value.questionAnswer;
    this.user.gender = this.signUpForm.value.gender;
    this.signUpForm.reset();
  }
}
