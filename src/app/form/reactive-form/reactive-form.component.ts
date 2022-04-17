import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor() { }
  // bind form to formGroup Object like this: signUpForm=new FormGroup
  signUpForm=new FormGroup({
    // pass/bind form controls in formControl object
    username:new FormControl(''),
    // default value of mobile number field
    mobileNumber:new FormControl('8808461356'),
    password:new FormControl('')
  })
  ngOnInit(): void {
     
    }
    signUpformDetails(){
      // get form data through formGroup object
      console.log(this.signUpForm.value)
    }
}
