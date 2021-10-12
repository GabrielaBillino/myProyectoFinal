import { CatalogoComponent } from './catalogo/catalogo.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProductosComponent } from './catalogo/lista-productos/lista-productos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ProductoDetalleComponent } from './catalogo/producto-detalle/producto-detalle.component';
import { OfertasComponent } from './shared/ofertas/ofertas.component';
import { CarritoComponent } from './carrito/carrito.component';

const routes: Routes = [
  {path: 'catalogo', component: CatalogoComponent      
  },    
  {path: 'contacto', component: ContactoComponent},
  {path: 'vestimenta/:id', component: ProductoDetalleComponent},
  {path: 'catalogo/sale', component: OfertasComponent},
  {path: 'carrito', component: CarritoComponent}  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
