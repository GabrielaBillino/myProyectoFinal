import { Component, OnInit } from '@angular/core';

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

  constructor() { }

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
    sessionStorage.removeItem("vestimenta"+producto.id);
    const newItems = this.cartProduct.filter((item:any)=>{
      return item.id !== producto.id
    });
    this.cartProduct = newItems;

    this.total -= producto.cantidad*producto.precio;
}

finalizarCompra(){
  this.total = 0;
  this.monto = 0;
  this.cartProduct = [];
  this.products.forEach((el:any)  => {
    sessionStorage.removeItem(el);
  });
  this.products = [];
}


}
