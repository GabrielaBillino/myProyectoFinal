import { CatalogoComponent } from './catalogo/catalogo.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProductosComponentGestion } from './gestion/productos/lista-productos/lista-productos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ProductoDetalleComponent } from './catalogo/producto-detalle/producto-detalle.component';
import { OfertasComponent } from './shared/ofertas/ofertas.component';
import { CarritoComponent } from './carrito/carrito.component';
import { ProductosComponentR } from './gestion/productos/productos.component';
import { ListaUsuariosComponent } from './gestion/usuarios/lista-usuario/lista-usuarios/lista-usuarios.component';

const routes: Routes = [
  {path: 'catalogo', component: CatalogoComponent      
  },    
  {path: 'contacto', component: ContactoComponent},
  {path: 'vestimenta/:id', component: ProductoDetalleComponent},
  {path: 'catalogo/sale', component: OfertasComponent},
  {path: 'carrito', component: CarritoComponent},
  {path: 'gestion/lista-productos', component: ListaProductosComponentGestion},
  {path: 'gestion/lista-usuario', component: ListaUsuariosComponent},
  {path: 'gestion/nuevo-producto', component: ProductosComponentR}  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
