import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  projectForm : FormGroup;
  forbiddenNames = ['test'];

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      'projectData' : new FormGroup({
        'name' : new FormControl(null, [Validators.required, this.forbiddenProjectName.bind(this)]),
        'status' : new FormControl('stable')
      }),
      'mail' : new FormControl(null, [Validators.required, Validators.email], this.invalidEmail.bind(this)),
    })
  }

  onSubmit(){
    console.log(this.projectForm);
  }

  //Validator
  forbiddenProjectName(control : FormControl) : {[name: string] : boolean}{
    if(this.forbiddenNames.includes(control.value)){
      return {'forbiddenName' : true}; 
    }
    return null;
  }

  invalidEmail(control:FormControl):Promise<{}>{
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!control.value.includes('.')){
          resolve({'emailIsNotValid' : true})
        }
        else{
          resolve(null)
        }
      }, 1500)
    })
    return promise;
  }
}
