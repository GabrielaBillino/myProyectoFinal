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

  constructor() { }

  ngOnInit(): void {
  }
  
  
}
