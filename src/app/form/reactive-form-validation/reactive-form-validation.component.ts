import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-validation',
  templateUrl: './reactive-form-validation.component.html',
  styleUrls: ['./reactive-form-validation.component.css']
})
export class ReactiveFormValidationComponent implements OnInit {

 signUpForm=new FormGroup({
  //  pattern matching
  username:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]), 
  // reuired and show default value
  mobileNumber:new FormControl('8808461356',[Validators.required]),
  // min length
  password:new FormControl('',[Validators.required,Validators.minLength(8)]),
  // email validation
  userEmail:new FormControl('',[Validators.required,Validators.email])
})
ngOnInit(): void {
   
  }
  
  // create getter for control and  function name should be any thing nut control name must be matched
  get inValidUser(){
    return this.signUpForm.get('username')
  }
  get inValidEmail(){
    return this.signUpForm.get('userEmail')
  }
  get inValidmobile(){
    return this.signUpForm.get('mobileNumber')
  }

  get inValidPass(){
    return this.signUpForm.get('password')
  }
  signUpformDetails(){
    console.log(this.signUpForm)
  }
}
