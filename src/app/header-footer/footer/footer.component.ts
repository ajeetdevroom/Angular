import { Component, OnInit } from '@angular/core';
import { UserlistServiceService } from 'src/app/shared-services/userlist-service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  userlist:any;
  constructor(private user:UserlistServiceService) {
    this.userlist=user.userList();
   }

  ngOnInit(): void {
  }

}
