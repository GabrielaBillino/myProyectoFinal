import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { ListaProductosComponent } from './catalogo/lista-productos/lista-productos.component';
import { ProductosComponent } from './catalogo/productos/productos.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { CarritoComponent } from './carrito/carrito.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { UsuariosComponent } from './gestion/usuarios/usuarios.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    CatalogoComponent,
    ListaProductosComponent,
    ProductosComponent,
    CarruselComponent,
    CarritoComponent,
    CheckOutComponent,
    UsuariosComponent,
    HeaderComponent,
    SidebarComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
