import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServItemOrdenService {
  url = "http://localhost:3000/item_orden";

  constructor(private _http: HttpClient) { }

  getItemOrden(){
    return this._http.get(this.url);
  }

  postItemOrden(itemOrden:any){
    return this._http.post(this.url,itemOrden);
  }

  deleteItemOrden(id:number){
    return this._http.delete(this.url+"/"+id);
  }

  putItemOrden(itemOrden:any){
    return this._http.put(this.url+"/"+itemOrden.id,itemOrden);
  }
}
