import { Component, Input, OnInit } from '@angular/core';
import { ToastService } from 'src/app/toast.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  @Input() vestimenta:any;
  @Input() caller:any;

  cartProduct ={
    "id": 0,
    "nombre": "",
    "imagen": "",
    "precio": 0,
    "categoriaId": 0,
    "cantidad": 0
  }

  constructor(private toastService: ToastService) { }

  ngOnInit(): void {
  }
 
  addItemCarrito(vestimenta:any){    
    this.cartProduct.id = vestimenta.id;
    this.cartProduct.nombre = vestimenta.nombre;
    this.cartProduct.precio = vestimenta.precio;
    this.cartProduct.imagen = vestimenta.imagen;
    this.cartProduct.categoriaId = vestimenta.categoriaId;
    this.cartProduct.cantidad = vestimenta.cantidad;
    //seteo vestimenta en sessionStorage
    sessionStorage.setItem("vestimenta"+vestimenta.id,JSON.stringify(this.cartProduct));
 
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Se agregó al carrito',
      showConfirmButton: false,
      timer: 1700
    })
  }

 
}
