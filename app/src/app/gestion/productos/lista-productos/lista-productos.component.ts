import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VestimentaService } from 'src/app/abm/vestimenta/vestimenta.service';
import { ProductosComponentR} from 'src/app/gestion/productos/productos.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-productosG',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponentGestion implements OnInit {
  columnas = [
    '',
    'Nombre',
    'Precio',
     ''  
  ]
  vestimenta={
    "id": 0,
    "nombre": "",
    "imagen": "",
    "precio": 0,
    "categoriaId": 0,
    "cantidad": 0
  }

  backup:any;
  vestimentas : any;
  id=0;

  constructor(private vestimentaService: VestimentaService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.vestimentaService.getVestimentas().subscribe(response=> {
      this.vestimentas = response;
      this.backup= this.vestimentas; 
    
      })

  }
  
  openProducto(vestimenta:any){
    const modalRef = this.modalService.open(ProductosComponentR, { size: 'lg' });
    modalRef.componentInstance.vestimenta = vestimenta;
  }

  eliminarProducto(id:any){
    Swal.fire({
      title: 'Estas seguro?',
      text: 'Estas a punto de eliminar un producto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si!',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.isConfirmed) {
        this.vestimentaService.deleteVestimenta(id).subscribe(response=>{
          let newProductos = this.vestimentas.filter((item:any) =>{
            return item.id !== id
          });
          this.vestimentas = newProductos;
          Swal.fire(
            'Eliminado!',
            'El producto ha sido eliminado.',
            'success'
          );
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelado',
          'El producto no sera eliminado :)',
          'error'
        )
      }
    })
  }

  
}
