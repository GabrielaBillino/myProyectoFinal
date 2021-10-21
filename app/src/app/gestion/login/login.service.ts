import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user : any;
  url = "http://localhost:3000/login";
  constructor(private _http: HttpClient) { }

  login(userLogin: any){
    return this._http.post(this.url,userLogin);
  }

  // isLogin(){
  //   return this.usuario.nombre.length > 0 && this.usuario.password.length > 0;
  // }

  getLogin(){
    return this._http.get(this.url);
  }

  logout(id:number){
    return this._http.delete(this.url+"/"+id);
  }

  getUser(){
    return this.user;
  }

  setUser(user:any){
    this.user = user;
  }
}
