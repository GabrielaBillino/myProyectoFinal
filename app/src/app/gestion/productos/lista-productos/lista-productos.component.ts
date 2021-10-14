import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VestimentaService } from 'src/app/abm/vestimenta/vestimenta.service';
import { ProductosComponent } from '../productos.component';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  columnas = [
    '',
    'Nombre',
    'Precio',
    'Categoria',
    ''  
  ]
  
  backup:any;
  vestimentas : any = []
  constructor(private vestimentaService: VestimentaService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.vestimentaService.getVestimentas().subscribe(response=> {
      this.vestimentas = response;
      this.backup= this.vestimentas; 
      console.log("vestimenta", this.vestimentas);
      })

  }
  eliminar(vestimentas:any){

  }
  openProducto(){
    const modalRef = this.modalService.open(ProductosComponent, { size: 'xl' });
  
  }
}
