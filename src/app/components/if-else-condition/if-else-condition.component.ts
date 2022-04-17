import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-else-condition',
  templateUrl: './if-else-condition.component.html',
  styleUrls: ['./if-else-condition.component.css']
})
export class IfElseConditionComponent implements OnInit {

  constructor() { }
  display=true;
  show=true;
  show2=true;
  show3="Ajeet";
  color="blue"
  ngOnInit(): void {
  }
  chnageCondition(){
    if(this.show==true){
      this.show=false;
    }else{
      this.show=true;
    }
  }
  chnageCondition2(){
    if(this.show2==true){
      this.show2=false;
    }else{
      this.show2=true;
    }
  }
  chnageCondition3(){
    if(this.show3=="Ajeet"){
      this.show3="Other";
      this.display=false;
      this.color="red"
    }else{
      this.show3="Ajeet";
      this.display=true;
      this.color="green"
    }
  }

}
