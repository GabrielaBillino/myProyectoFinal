import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { ContactoService } from '../abm/contacto/contacto.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  constructor(private contactoService: ContactoService) { }
  contactos:any;
  contacto= {
    id: 0,
    nombre: "",
    mail: "",
    mje: ""
   }
  ngOnInit(): void {
   this.contactoService.getContacto().subscribe(response => {
     this.contactos = response })  
    
  } 
  enviarMje(){
    this.contactoService.postContacto(this.contacto).subscribe(response=> {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Se creó correctamente',
        showConfirmButton: false,
        timer: 1700
      })
    });   
  } 
}
