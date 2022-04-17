import { Component, OnInit } from '@angular/core';
import {datatypeM} from 'src/app/interface/user' 
// you can write interface here like this
// interface datatypeM{
//   name:string,
//   id:number,
//   indian:boolean,
//   address:string
// }

@Component({
  selector: 'app-impliment-model-interface',
  templateUrl: './impliment-model-interface.component.html',
  styleUrls: ['./impliment-model-interface.component.css']
})
export class ImplimentModelInterfaceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  getData(){
    const makeingData:datatypeM={
      name:'Ajeet kumar',
      id:1235,
      indian:true,
      address:'Rampur bhagan'
    }
    return makeingData;
  } 

}
