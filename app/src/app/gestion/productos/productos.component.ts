import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriaService } from 'src/app/abm/categoria/categoria.service';
import { VestimentaService } from 'src/app/abm/vestimenta/vestimenta.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  categorias: any;
  selectedCategoria="";
  categoria_valid = "";
  nombre_valid = "";
  id=0;
  
  vestimenta={
    "id": 0,
    "nombre": "",
    "imagen": "",
    "precio": 0,
    "categoriaId": 0,
    "cantidad": 0
          }
  constructor(private categoriaService: CategoriaService, private route: ActivatedRoute, private vestimentaService: VestimentaService) { }

  ngOnInit(): void {
    this.categoriaService.getCategorias().subscribe(response => {
      this.categorias = response;
      console.log("categoria", this.categorias);
    });

    
    
    this.route.params.subscribe(response=>{
      if(response.id !== undefined){
        this.id = response.id;
        this.vestimentaService.getById(this.id).subscribe(response=>{
          this.vestimenta = JSON.parse(JSON.stringify(response));
          this.selectedCategoria = JSON.parse(JSON.stringify(this.vestimenta.categoriaId));
      
        })
      }
    });

    
  }
  changeCategoria(){
    this.vestimenta.categoriaId = Number(this.selectedCategoria);
    this.categoria_valid =  "is-valid";
  }

  handleNameInput(event:any){
    if(event.target.value.length > 0){
      this.nombre_valid = "is-valid";
    }
    else{
      this.nombre_valid = "is-invalid";
    }
  }
}
