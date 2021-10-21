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
    "password": ""
  }
  nombreLogueado="";
  constructor(private userService: UserServService, private modalService: NgbModal, private roleService: RolesService, private loginService: LoginService) { 

  }

  ngOnInit(): void {
    this.userService.getUser().subscribe((response) => {
      this.usuarios= response;
      this.backup= this.usuarios;
      
    });
    this.roleService.getRole().subscribe((response:any) => {
      this.roles= response;
      this.backupRole= this.roles;
      })
  }
  login(){
    let userTemp = this.backup.find((response:any) => response.nombre === this.usuario.nombre && response.password === this.usuario.password);
    console.log("userTemp", userTemp);  
    if (userTemp !== null){

        this.userLogin.nombre = this.usuario.nombre;
        this.userLogin.password = this.usuario.password;
        this.loginService.login(this.userLogin).subscribe(response => {
          this.loginService.setUser(response);
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Se logueo correctamente',
            showConfirmButton: false,
            timer: 1700
          })
          console.log(this.loginService.getUser());
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
