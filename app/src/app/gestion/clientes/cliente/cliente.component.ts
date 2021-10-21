
import { Component, OnInit } from '@angular/core';
import { UserServService } from '../../usuarios/servicio/user-serv.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  backup:any;
  usuarios : any;
  constructor(private userService: UserServService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe(response=> {
      this.usuarios = response;
      this.backup= this.usuarios; 
    
      })
  }

}
