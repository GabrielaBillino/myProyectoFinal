import { CatalogoComponent } from './catalogo/catalogo.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProductosComponent } from './catalogo/lista-productos/lista-productos.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
  {path: 'catalogo', component: CatalogoComponent,
      children:[
        {path: 'lista-productos', component: ListaProductosComponent}
              ]
  },
  {path: 'contacto', component: ContactoComponent}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
