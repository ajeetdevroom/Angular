import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-with-formbuilder',
  templateUrl: './form-with-formbuilder.component.html',
  styleUrls: ['./form-with-formbuilder.component.css']
})
export class FormWithFormbuilderComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  nameControl:any;
  mobileNumberControl:any;
  passwordControl:any;

  signUpForm=this.fb.group({
    username:['',Validators.required],
    mobileNumber:[''],
    password:['']
  })
  
  ngOnInit(): void {
  }
  signUpformDetails(){
    this.nameControl=this.signUpForm.controls['username'].value;
  this.mobileNumberControl=this.signUpForm.controls['mobileNumber'].value;
    this.passwordControl=this.signUpForm.controls['password'].value
  }

}
