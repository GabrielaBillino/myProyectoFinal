import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-imagen',
  templateUrl: './gestion-imagen.component.html',
  styleUrls: ['./gestion-imagen.component.css']
})
export class GestionImagenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    id: 0;
   nombre: "";
   imagen: "";
  }

}
