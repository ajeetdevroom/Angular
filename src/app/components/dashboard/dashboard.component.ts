import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiServiceService } from 'src/app/shared-services/api-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _httpPost:ApiServiceService) { }
  signUpForm=new FormGroup({
    username:new FormControl(''),
    mobileNumber:new FormControl('8808461356'),
    password:new FormControl('')
  })
  ngOnInit(): void {
     
    }
    signUpformDetails(rdata:any){
      // get form data through formGroup object
      console.warn(rdata);
      this._httpPost.saveData(rdata).subscribe((result)=>{
        console.log("API result");
        console.log(result);
      });
    }

}


