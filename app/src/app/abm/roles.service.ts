import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RolesService {
  url = "http://localhost:3000/role";

  constructor(private _http: HttpClient) { }

  getRole(){
    return this._http.get(this.url);
  }
}
