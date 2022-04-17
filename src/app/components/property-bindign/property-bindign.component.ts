import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-bindign',
  templateUrl: './property-bindign.component.html',
  styleUrls: ['./property-bindign.component.css']
})
export class PropertyBindignComponent implements OnInit {

  constructor() { }
  name="Ajeet";
  dis=true;
  ngOnInit(): void {
  }
  changeState(){
    if(this.dis==true){
      this.dis=false;
    }else{
      this.dis=true;
    }
    
  }
}
