import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-intro-sample-form',
  templateUrl: './intro-sample-form.component.html',
  styleUrls: ['./intro-sample-form.component.css']
})
export class IntroSampleFormComponent implements OnInit {

  constructor() { }
  usersDate:any;
  ngOnInit(): void {
  }
  getFormData(date:NgForm){
    console.log(date);
    this.usersDate=date;
  }
}
