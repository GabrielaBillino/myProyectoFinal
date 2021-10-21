import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RolesService } from 'src/app/abm/roles.service';
import Swal from 'sweetalert2';
import { UserServService } from './servicio/user-serv.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  roles: any;
  selectedRole="";
  role_valid = "";
  nombre_valid = "";
  mail_valid= "";
  pass_valid="";
  id=0;
  backup:any;
  backupRole:any;
  title="";
  
  user= {
    id: 0,
    nombre: "",
    roleId: 0,
    mail: "",
    password: ""
  }
  constructor(private roleService: RolesService, private route: ActivatedRoute, private userService: UserServService) {
   
   }

  ngOnInit(): void {
    this.roleService.getRole().subscribe(response => {
      this.roles = response;
      this.backupRole = this.roles;
    });
    if(this.user.id ===0){
      this.title ="Alta - Usuario";
    }else{
      this.title = "Editar - Usuario";
      if (this.user.roleId === 1){
        this.selectedRole = "Admin"        
      }else{
        this.selectedRole ="Usuario"
      }    
     
      // this.selectedRole = this.roles.filter((response:any) =>{
      //   return response.id === this.user.roleId;
      // })[0].nombre;      
    }
  }
  
  changeRole(){
    for (let index = 0; index < this.roles.length; index++) {
      if (this.roles[index].nombre === this.selectedRole) {
        this.user.roleId = index+1;
      }      
    }
    this.role_valid =  "is-valid";    
  }

  handleNameInput(event:any){
    if(event.target.value.length > 0){
      this.nombre_valid = "is-valid";
    }
    else{
      this.nombre_valid = "is-invalid";
    }
  }

  handleMailInput(event:any){
    if(event.target.value.length > 0){
      this.mail_valid = "is-valid";
    }
    else{
      this.mail_valid = "is-invalid";
    }
  }
  handlePassInput(event:any){
    if(event.target.value.length > 0){
      this.pass_valid = "is-valid";
    }
    else{
      this.pass_valid = "is-invalid";
    }
  }
  guardar(){
    if(this.user.id ===0){     
      this.userService.postUser(this.user).subscribe(data =>{
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Se creó correctamente',
          showConfirmButton: false,
          timer: 1700
        })
      })
    }else{
      this.userService.putUser(this.user).subscribe(response =>{
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Se modificó correctamente',
          showConfirmButton: false,
          timer: 1700
        })
      })
    }  
  }

}
