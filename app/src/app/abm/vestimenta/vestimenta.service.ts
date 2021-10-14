import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VestimentaService {
  url = "http://localhost:3000/vestimenta";

  constructor(private _http: HttpClient) { }

  getVestimentas(){
    return this._http.get(this.url);
  }

  postVestimenta(vestimenta:any){
    return this._http.post(this.url,vestimenta);
  }

  deleteVestimenta(id:number){
    return this._http.delete(this.url+"/"+id);
  }

  putVestimenta(vestimenta:any){
    return this._http.put(this.url+"/"+vestimenta.id,vestimenta);
  }

  getById(id:number){
    return this._http.get(this.url + "/" + id);
  }
}
