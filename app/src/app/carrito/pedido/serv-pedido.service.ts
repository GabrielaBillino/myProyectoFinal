import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServPedidoService {
  url = "http://localhost:3000/pedido";
  constructor(private _http: HttpClient) { }

  getPedido(){
    return this._http.get(this.url);
  }

  postPedido(pedido:any){
    return this._http.post(this.url,pedido);
  }

  deletePedido(id:number){
    return this._http.delete(this.url+"/"+id);
  }

  putPedido(pedido:any){
    return this._http.put(this.url+"/"+pedido.id,pedido);
  }

}
