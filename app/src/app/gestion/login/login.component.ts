import { User } from './../usuarios/clase/user';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RolesService } from 'src/app/abm/roles.service';
import Swal from 'sweetalert2';
import { UserServService } from '../usuarios/servicio/user-serv.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuarios: any;
  backup:any;
  backupRole: any;
  selectedRol="";
  roles:any;
  usuario={
    "id": 0,
    "nombre": "",
    "roleId": 0,
    "mail": "",
    "password": ""
  }
  constructor(private userService: UserServService, private modalService: NgbModal, private roleService: RolesService) { 

  }

  ngOnInit(): void {
    this.userService.getUser().subscribe((response) => {
      this.usuarios= response;
      this.backup= this.usuarios;
      console.log("Soy los usuarios", this.usuarios);
    });
    this.roleService.getRole().subscribe((response:any) => {
      this.roles= response;
      this.backupRole= this.roles;
      })
  }
  login(nombreLogin:any){
    let userTemp = this.backup.filter((response:any) => response.nombre === nombreLogin);
      if (userTemp.length > 0 ){
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Se logueo correctamente',
          showConfirmButton: false,
          timer: 1700
        })
        sessionStorage.setItem(nombreLogin,JSON.stringify(userTemp));
      }else{
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Error en el usuario o la contraseña',
          showConfirmButton: false,
          timer: 1700
      })} 
  }
     
  registro(){
    this.userService.postUser(this.usuarios).subscribe(data =>{
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Se creó correctamente',
        showConfirmButton: false,
        timer: 1700
      })
    })
  }
}
