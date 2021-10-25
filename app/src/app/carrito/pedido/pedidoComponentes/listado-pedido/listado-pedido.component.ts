import { Component, OnInit } from '@angular/core';
import { ServPedidoService } from '../../serv-pedido.service';

@Component({
  selector: 'app-listado-pedido',
  templateUrl: './listado-pedido.component.html',
  styleUrls: ['./listado-pedido.component.css']
})
export class ListadoPedidoComponent implements OnInit {
  pedidos:any;
  backup:any;
  columnas = [
    'Orden',
    'Cliente id',
    'Fecha entrega' 
  ]
  pedido ={
    id: 0,
    clienteId: 0,
    item_orden: [{
            id: 0,
            "nombre": "",
            "imagen": "",
            "precio": 0,
            "categoriaId": 0,
            "cantidad": 0
        }
    ],
    fchEntrega: "15/11/21"
  }
 
  constructor(private pedidoService: ServPedidoService) { }

  ngOnInit(): void {
    this.pedidoService.getPedido().subscribe(response=> {
      this.pedidos = response;
      this.backup= this.pedidos;     
      });
     
  }


}
