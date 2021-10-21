import { UsuariosComponent } from './../../usuarios.component';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserServService } from '../../servicio/user-serv.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {
  columnas = [
    'Nombre',
    'Mail',
    'Contraseña',
    'Role',
    ''  
  ]
  user= {
      id: 0,
      nombre: "",
      roleId: 0,
      mail: "",
      password: ""
    }

  backup:any;
  usuarios : any;
  id=0;

  constructor(private userService: UserServService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe(response=> {
      this.usuarios = response;
      this.backup= this.usuarios;     
    })
    

  }
  
  openUser(user:any){
    const modalRef = this.modalService.open(UsuariosComponent);
    modalRef.componentInstance.user = user;
  }

  eliminarUser(id:any){
    Swal.fire({
      title: 'Estas seguro?',
      text: 'Estas a punto de eliminar un usuario!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si!',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.deleteUser(id).subscribe(response=>{
          let newUser = this.usuarios.filter((item:any) =>{
            return item.id !== id
          });
          this.usuarios = newUser;
          Swal.fire(
            'Eliminado!',
            'El usuario ha sido eliminado.',
            'success'
          );
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelado',
          'El usuario no será eliminado :)',
          'error'
        )
      }
    })
  }

}
