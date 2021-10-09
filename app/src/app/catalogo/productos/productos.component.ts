import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  @Input() vestimenta:any;
  @Input() caller:any;
  constructor() { }

  ngOnInit(): void {
  }
 
  filtrar(){
    // let newVestimenta = this.vestimentas.filter(vestimenta => {
    //   return vestimenta.categoriaId.toLowerCase().includes(this.termino.toLowerCase()) === true
    // });
    // this.vestimentas = newVestimenta;
  }
}
