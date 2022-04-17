import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  url="https://api.github.com/users";
  postUrl="https://jsonplaceholder.typicode.com/posts";
  constructor(private _http:HttpClient) { }
  users(){
    return this._http.get(this.url);
  }
  saveData(data:any){
    return this._http.post(this.postUrl,data);
  }
}
