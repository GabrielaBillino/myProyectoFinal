import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ServItemOrdenService } from './pedido/item/serv-item-orden.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  columnas = [
    '',
    'Nombre',
    'Precio',
    'Cantidad',
    ''  
  ]

  total = 0;
  monto = 0;
  products: string[] = []
  cartProduct : any = []

  itemCarrito={
     "vestimentaId":0,
     "cantidad":0,
     "total":0
  }
  backup: any;
  itemOrden: any;
  constructor(private itemOrdenService: ServItemOrdenService) { }

  ngOnInit(): void {
    this.products = Object.keys(sessionStorage);
    this.products.forEach((el:any)  => {
      const item = sessionStorage.getItem(el);

      if (item !== null) {
        let obj = JSON.parse(item);
        this.cartProduct.push(JSON.parse(item));
        this.total += obj.cantidad*obj.precio;
      }
    });
  }

  sumarCantidad(producto:any){
    let temp = this.cartProduct.map((element: any)=>{
      if (element.id === producto.id){
        element.cantidad++;
        this.total += element.precio;
        return element
      }
      else{
        return element;
      }
    });
    this.cartProduct = temp;
  }

  restarCantidad(producto:any){
    if(producto.cantidad === 1){
      let borrar = this.cartProduct.filter((element:any)=>{
        return element.id !== producto.id;
      })
      this.total -= producto.precio;
      this.cartProduct = borrar;
    }
    else{
      let temp = this.cartProduct.map((element: any)=>{
      if (element.id === producto.id){
        element.cantidad--;
        this.total -= element.precio;
        return element;
      }
      else{
        return element;
      }
    });
    
    this.cartProduct = temp;
    }
    sessionStorage.removeItem("vestimenta"+producto.id);

  }

  eliminar(producto: any){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Eliminado!',
          'El producto fue eliminado del carrito.',
          'success'
        )
        sessionStorage.removeItem("vestimenta"+producto.id);
        const newItems = this.cartProduct.filter((item:any)=>{
         return item.id !== producto.id
        });
        this.cartProduct = newItems;
        this.total -= producto.cantidad*producto.precio;
      }
    })
  }

  finalizarCompra(){
    
    
    this.itemCarrito.cantidad = this.cartProduct.cantidad;
    this.itemCarrito.total = this.cartProduct.total;
    this.itemCarrito = this.cartProduct;

    if (this.cartProduct.length > 0) {
      for (let i = 0; i < this.cartProduct.length; i++) {
        this.itemOrdenService.postItemOrden(this.cartProduct[i]).subscribe((result:any)=>{
          this.itemOrden = result;
          this.backup=this.itemOrden;
          console.log("itemOrden finalizar!!", this.itemOrden);
        })
      }
    }else{
      this.itemOrdenService.postItemOrden(this.cartProduct).subscribe((result:any)=>{
        this.itemOrden = result;
        this.backup=this.itemOrden;
        console.log("itemOrden finalizar uno solo!!", this.itemOrden);
      })
    }
    
  
   
    // this.total = 0;
    // this.monto = 0;
    // this.cartProduct = [];
    // this.products.forEach((el:any)  => {
    //   sessionStorage.removeItem(el);
    // });
    // this.products = [];
    
  }


}
