import { User } from './../usuarios/clase/user';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RolesService } from 'src/app/abm/roles.service';
import Swal from 'sweetalert2';
import { UserServService } from '../usuarios/servicio/user-serv.service';
import { LoginService } from './login.service';

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
  userLogin={
    "id": 0,
    "nombre": "",
    "password": "",
    "roleId":0
  }
  nombreLogueado="";
  constructor(private userService: UserServService, private modalService: NgbModal, private roleService: RolesService, private loginService: LoginService) { 

  }

  ngOnInit(): void {
    this.userService.getUser().subscribe((response) => {
      this.usuarios= response;
      this.backup= this.usuarios;      
    });

    this.roleService.getRole().subscribe((responseRole:any) => {
      this.roles= responseRole;
      this.backupRole= this.roles;
      })
  }
  login(){
    let userTemp = this.backup.find((response:any) => response.nombre === this.usuario.nombre && response.password === this.usuario.password);
   //userTemp no es undefined cuando existe el usuario, en caso contrario sale cartel
    if (userTemp !== undefined){
        this.userLogin.nombre = userTemp.nombre;
        this.userLogin.password = userTemp.password;
        this.userLogin.roleId = userTemp.roleId;
        this.loginService.login(this.userLogin).subscribe(response => {
          this.loginService.setUser(response);
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Se logueo correctamente',
            showConfirmButton: false,
            timer: 1700
          })
          
        });
      
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
    
    if(this.usuario.roleId ===0){
      this.usuario.roleId=1;
    }else{
      this.usuario.roleId=2;
    }  
    
    this.userService.postUser(this.usuario).subscribe(data =>{
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
