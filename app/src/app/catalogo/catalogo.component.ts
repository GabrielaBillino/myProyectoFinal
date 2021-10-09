import { Component, OnInit } from '@angular/core';
import { VestimentaService } from '../abm/vestimenta/vestimenta.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  vestimentas: any;
  backup:any;
  constructor(private vestimentaService: VestimentaService) {
   
   }

  ngOnInit(): void {
    this.vestimentaService.getVestimentas().subscribe(response=> {
      this.vestimentas = response;
    this.backup= this.vestimentas;  
    })
  }

  lista(id:number){
   let lista = this.backup.filter((vestimenta:any) =>vestimenta.id == id)
   this.vestimentas = lista;   
  }

}
