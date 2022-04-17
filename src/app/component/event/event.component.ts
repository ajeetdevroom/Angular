import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  getValueOnUP(val:string){
    console.warn("you text box value:  "+val)
  }
  getValueOnBlur(blurValue:any){
    alert(blurValue);
  }

}
