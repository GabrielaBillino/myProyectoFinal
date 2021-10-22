import { Component, OnInit } from '@angular/core';
import { ServItemOrdenService } from '../serv-item-orden.service';

@Component({
  selector: 'app-item-orden',
  templateUrl: './item-orden.component.html',
  styleUrls: ['./item-orden.component.css']
})
export class ItemOrdenComponent implements OnInit {
  columnas = [
    '',
    'Nombre',
    'Precio',
    'Cantidad',
    ''  
  ]
  total = 0;
  items:any;
  backup:any;
  itemsTemp:any;
  constructor(private itemOrdenService : ServItemOrdenService) { }

  ngOnInit(): void {
    this.itemOrdenService.getItemOrden().subscribe((itemOrden:any)=>{
      this.items = itemOrden;
      this.backup= this.items; 
      console.log("items", this.items);

     
      for (let index = 0; index < this.items.length; index++) {
        this.total += this.items[index].cantidad * this.items[index].precio;
      }  
       
    });
    
  
    
    
  }

}
