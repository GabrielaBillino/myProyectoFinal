
import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../serv/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  backup:any;
  cliente=
        {"id": 0,
        "nombre": "",
        "direccion": "",
        "mail": "",
        "telefono": 0,
        "formaPago": ""}
  clientes:any;
  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    // this.clienteService.getCliente().subscribe(response=> {
    //   this.cliente = response;
    //   this.backup= this.cliente; 
    
    //   })

  }
  finalizarPedido(){
    console.log("clientes", this.cliente);
    this.clienteService.postCliente(this.cliente).subscribe(response=> {
      this.clientes = response;
      this.backup= this.clientes;
    })
  }

}
