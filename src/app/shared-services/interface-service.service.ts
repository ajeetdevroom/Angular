import { Injectable } from '@angular/core';
import {datatypeM} from 'src/app/interface/user' 
// you can write interface here like this
// interface datatypeM{
//   name:string,
//   id:number,
//   indian:boolean,
//   address:string
// }

@Injectable({
  providedIn: 'root'
})
export class InterfaceServiceService {

  constructor() { }
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
