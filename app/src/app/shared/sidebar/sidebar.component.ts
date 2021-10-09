import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CategoriaService } from 'src/app/abm/categoria/categoria.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Output() categoria= new EventEmitter<any>();
  categorias:any;
 
  constructor(private categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.categoriaService.getCategorias().subscribe(response => {
      this.categorias = response;
    })
  }

  lista(categoria: any){
    this.categoria.emit(categoria.id);
  }
}
