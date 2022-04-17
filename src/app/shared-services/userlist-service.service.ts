import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserlistServiceService {

  constructor() { }
  userList()
  {
    return [
      {name:'Ajeet',age:31,address:'faizabad'},
      {name:'Ankit',age:28,address:'rampur faizabad'},
      {name:'Ashwani',age:29,address:'rampur bhagan, faizabad'},
      {name:'Rangeeta',age:29,address:'Ayodhya, faizabad'}
    ]
  }
}
