
import { Component, OnInit } from '@angular/core';
import { CarritoComponent } from 'src/app/carrito/carrito.component';
import { ServItemOrdenService } from 'src/app/carrito/pedido/item/serv-item-orden.service';
import { ServPedidoService } from 'src/app/carrito/pedido/serv-pedido.service';
import Swal from 'sweetalert2';
import { ClienteService } from '../serv/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  backup:any;
  itemsTemp:any;
  largoCliente=0;
  clienteId=0;
  cliente=
        {"id": 0,
        "nombre": "",
        "direccion": "",
        "mail": "",
        "telefono": 0,
        "formaPago": ""}
  clientes:any;
  client:any;
  clientesTemp:any;
  pedidoTemp:any;
  backupPedido:any;
  carrito: any = CarritoComponent;
  pedido=
    {
      "id": 0,
      "clienteId": 0,
      "item_orden": {
            "id": 0,
            "nombre": "",
            "imagen": "",
            "precio": 0,
            "categoriaId": 0,
            "cantidad": 0
      },
      "fchEntrega": "15/11/21"
    }
  constructor(private clienteService: ClienteService, private itemOrdenService : ServItemOrdenService, private pedidoService: ServPedidoService) { }

  ngOnInit(): void {
   
    this.itemOrdenService.getItemOrden().subscribe(response=> {
      this.itemsTemp = response;
      this.backup= this.itemsTemp;
      console.log("SoyLosItems", this.itemsTemp);
    })
    
  }
  finalizarPedido(){
    this.clienteService.postCliente(this.cliente).subscribe(response=> {
      this.clientes = response;
      this.backup= this.clientes;
     
    });
     this.clienteService.getClientes().subscribe((response:any)=> {
      this.clientesTemp = response;
 
      this.largoCliente = this.clientesTemp.length;
     this.clienteId = this.clientesTemp[this.largoCliente-1].id;
     this.pedido.clienteId = this.clienteId;
    this.pedido.item_orden = this.itemsTemp;
    this.pedidoService.postPedido(this.pedido).subscribe(response=>{
      this.pedidoTemp = response;
      this.backupPedido = this.pedidoTemp;

    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Se confirmó el pedido!! Fecha de entrega 15/11/21',
      showConfirmButton: false,
      timer: 1700
    })
    
    //Vaciar carrito
    this.carrito.total =0;
    this.carrito.monto = 0;
    this.carrito.cartProduct = [];
    this.carrito.products.forEach((el:any)  => {
      sessionStorage.removeItem(el);
    });
    this.carrito.products = [];
    
    })
    
    })

    
     
  }

}
