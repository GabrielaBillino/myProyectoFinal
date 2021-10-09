import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  url = "http://localhost:3000/categoria";
  constructor(private _http: HttpClient) { }

  getCategorias(){
    return this._http.get(this.url);
  }

  postCategoria(categoria:any){
    return this._http.post(this.url,categoria);
  }

  deleteCategoria(id:number){
    return this._http.delete(this.url+"/"+id);
  }

  putCategoria(categoria:any){
    return this._http.put(this.url+"/"+categoria.id,categoria);
  }
}
