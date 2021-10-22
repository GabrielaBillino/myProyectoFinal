import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CarritoComponent } from 'src/app/carrito/carrito.component';
import { ContactoComponent } from 'src/app/contacto/contacto.component';
import { LoginComponent } from 'src/app/gestion/login/login.component';
import { LoginService } from 'src/app/gestion/login/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  router:any;
  backupLogin:any;
  logins:any;
  
 
 
  constructor(private modalService: NgbModal, public loginService: LoginService) {
 
   }

  ngOnInit(): void {
    this.loginService.getLogin().subscribe((response) => {
      this.backupLogin= response;
      this.logins= this.backupLogin;
    }); 
    console.log(this.loginService.getUser())
   
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

  

 
}
