import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CarritoComponent } from 'src/app/carrito/carrito.component';
import { ContactoComponent } from 'src/app/contacto/contacto.component';
import { LoginComponent } from 'src/app/gestion/login/login.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  router:any;
  islogin=false;
  nombreLogueado="";
  usuariosLog: string[] = []
 
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this.usuariosLog = Object.keys(sessionStorage);
  
    this.usuariosLog.forEach((el:any)  => {
      const item = sessionStorage.getItem(el);
      console.log("item session!!", item)
      if (item !== null) {
        let obj = JSON.parse(item);
        this.nombreLogueado = obj[0].nombre;
      }
      if (this.nombreLogueado !== null) {
        this.islogin=true;
      }
    });
    
  }
  openNewTab() {
    const url = this.router.serializeUrl(
      this.router.createUrlTree(['catalogo'])
    );
  
    window.open(url, '_blank');
  }
  open() {
    const modalRef = this.modalService.open(ContactoComponent);
    
  }

  openCarrito(){
    const modalRef = this.modalService.open(CarritoComponent, { size: 'xl' });
  }

  openLogin(){
    const modalRef = this.modalService.open(LoginComponent, {size: 'sm'});
  }
}
