import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { ListaProductosComponent } from './catalogo/lista-productos/lista-productos.component';
import { ProductosComponent } from './catalogo/productos/productos.component';
import { ProductosComponentR } from './gestion/productos/productos.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { CarritoComponent } from './carrito/carrito.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { UsuariosComponent } from './gestion/usuarios/usuarios.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductoDetalleComponent } from './catalogo/producto-detalle/producto-detalle.component';
import { OfertasComponent } from './shared/ofertas/ofertas.component';
import { LoginComponent } from './gestion/login/login.component';
import { ListaProductosComponentGestion } from './gestion/productos/lista-productos/lista-productos.component';
import { GestionImagenComponent } from './gestion/productos/gestion-imagen/gestion-imagen.component';
import { ListaUsuariosComponent } from './gestion/usuarios/lista-usuario/lista-usuarios/lista-usuarios.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    CatalogoComponent,
    ListaProductosComponent,
    ListaProductosComponentGestion,
    ProductosComponent,
    ProductosComponentR,
    CarruselComponent,
    CarritoComponent,
    CheckOutComponent,
    UsuariosComponent,
    HeaderComponent,
    SidebarComponent,
    ContactoComponent,
    ProductoDetalleComponent,
    OfertasComponent,
    LoginComponent,
    GestionImagenComponent,
    ListaUsuariosComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
