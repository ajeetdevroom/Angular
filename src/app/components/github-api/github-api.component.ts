import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/shared-services/api-service.service';

@Component({
  selector: 'app-github-api',
  templateUrl: './github-api.component.html',
  styleUrls: ['./github-api.component.css']
})
export class GithubApiComponent implements OnInit {
  ua:any;
  constructor(private userData:ApiServiceService) {
    this.userData.users().subscribe((data)=>{
      this.ua=data
      console.log('data',data);
    });
    
   }

  ngOnInit(): void {
  }

}
