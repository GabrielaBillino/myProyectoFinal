import { Component, Input, OnInit } from '@angular/core';
import { VestimentaService } from 'src/app/abm/vestimenta/vestimenta.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  @Input() vestimentas: any;
  
  termino="";
  constructor(private vestimentaService : VestimentaService) { }

  ngOnInit(): void {
   
    
  }

}
