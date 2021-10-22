import { Component, Input, OnInit, Output } from '@angular/core';
import { ServItemOrdenService } from '../carrito/pedido/item/serv-item-orden.service';
import { ClienteComponent } from '../gestion/clientes/cliente/cliente.component';
import { ClienteService } from '../gestion/clientes/serv/cliente.service';


@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  constructor(private clienteService: ClienteService, private itemOrdenService : ServItemOrdenService) { }

  ngOnInit(): void {
  }
  cliente:any;
  clientes:any;
  finalizarPedido(){
    // this.total = 0;
    // this.items.forEach((el:any)  => {
    //    sessionStorage.removeItem(el);
    // });
    // this.itemOrdenService.deleteItemOrden(this.items.id).subscribe(result => {
      
    // });
    console.log("clientes", this.cliente);
    this.clienteService.postCliente(this.cliente).subscribe(result => {
      this.clientes = result;
      
    });
  }
}
