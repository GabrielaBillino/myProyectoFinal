import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../clase/user';

@Injectable({
  providedIn: 'root'
})
export class UserServService {
  url = "http://localhost:3000/user";

  constructor(private _http: HttpClient) { }

  getUser(){
    return this._http.get(this.url);
  }

  postUser(user:User){
    return this._http.post(this.url,user);
  }

  deleteUser(id:number){
    return this._http.delete(this.url+"/"+id);
  }

  putUser(user:User){
    return this._http.put(this.url+"/"+user.id,user);
  }

  getById(id:number){
    return this._http.get(this.url + "/" + id);
  }
}
