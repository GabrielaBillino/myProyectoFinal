import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriaService } from 'src/app/abm/categoria/categoria.service';
import { VestimentaService } from 'src/app/abm/vestimenta/vestimenta.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-productos-r',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponentR implements OnInit {
  categorias: any;
  selectedCategoria="";
  categoria_valid = "";
  nombre_valid = "";
  precio_valid= "";
  id=0;
  backup:any;
  title="";
  // archivos : any = [];
  vestimenta={
    "id": 0,
    "nombre": "",
    "imagen": "",
    "precio": 0,
    "categoriaId": 0,
    "cantidad": 0
          }
  constructor(private categoriaService: CategoriaService, private route: ActivatedRoute, private vestimentaService: VestimentaService) {
   
   }

  ngOnInit(): void {
    this.categoriaService.getCategorias().subscribe(response => {
      this.categorias = response;
      this.backup = this.categorias;
      if(this.vestimenta.id ===0){
        this.title ="Alta - Producto";
    }else{
      this.selectedCategoria = this.categorias.filter((item:any) =>{
        return item.id === this.vestimenta.categoriaId
      })[0].nombre;
      this.title = "Editar - Producto";
    }
    });

  }
  changeCategoria(){
    for (let index = 0; index < this.categorias.length; index++) {
      if (this.categorias[index].nombre === this.selectedCategoria) {
        this.vestimenta.categoriaId = index+1;
      }      
    }
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

  handlePrecioInput(event:any){
    if(event.target.value.length > 0){
      this.precio_valid = "is-valid";
    }
    else{
      this.precio_valid = "is-invalid";
    }
  }
  capturarImg(event:any){
    const imgCapturado = event.target.files[0];
    // this.archivos.push(imgCapturado);
    this.vestimenta.imagen = "assets/img/"+event.target.files[0].name;
      
  }
  guardar(){
    if(this.vestimenta.id ===0){     
      this.vestimentaService.postVestimenta(this.vestimenta).subscribe(data =>{
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Se creó correctamente',
          showConfirmButton: false,
          timer: 1700
        })
      })
    }else{
      this.vestimentaService.putVestimenta(this.vestimenta).subscribe(response =>{
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
