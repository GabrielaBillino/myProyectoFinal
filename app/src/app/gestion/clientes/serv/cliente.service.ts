import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  url = "http://localhost:3000/cliente";

  constructor(private _http: HttpClient) { }

  getCliente(){
    return this._http.get(this.url);
  }

  postCliente(cliente:any){
    return this._http.post(this.url,cliente);
  }

  deleteCliente(id:number){
    return this._http.delete(this.url+"/"+id);
  }

  putCliente(cliente:any){
    return this._http.put(this.url+"/"+cliente.id,cliente);
  }

}
