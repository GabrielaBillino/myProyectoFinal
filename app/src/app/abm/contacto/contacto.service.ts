import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  url = "http://localhost:3000/contacto";
  constructor(private _http: HttpClient) { }

  getContacto(){
    return this._http.get(this.url);
  }

  postContacto(contacto:any){
    return this._http.post(this.url,contacto);
  }
}
