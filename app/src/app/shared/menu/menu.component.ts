import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CarritoComponent } from 'src/app/carrito/carrito.component';
import { ContactoComponent } from 'src/app/contacto/contacto.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  router:any;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
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
