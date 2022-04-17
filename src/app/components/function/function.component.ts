import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-function',
  templateUrl: './function.component.html',
  styleUrls: ['./function.component.css']
})
export class FunctionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getFunction(){
    alert("Your functio is runing")
  }
  getFunctionValue(parm:string){
    alert("You passed value"+parm);
  }
  getFunctionValue2(parm:string,parm2:number){
    alert("You passed value: "+parm+" Second parameter is: "+parm2);
  }
}
