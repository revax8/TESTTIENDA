import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TiendasListComponent } from './components/tiendas-list/tiendas-list.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { TiendaAddComponent } from './Components/tienda-add/tienda-add.component';
import { FormsModule } from '@angular/forms';
import { TiendaEditComponent } from './Components/tienda-edit/tienda-edit.component';
import { ArticuloListComponent } from './Components/articulo-list/articulo-list.component';
import { ArticuloAddComponent } from './Components/articulo-add/articulo-add.component';
import { ArticuloEditComponent } from './Components/articulo-edit/articulo-edit.component';
import { ArticuloTiendaComponent } from './Components/articulo-tienda/articulo-tienda.component';
import { ClienteAddComponent } from './Components/cliente-add/cliente-add.component';
import { ClienteEditComponent } from './Components/cliente-edit/cliente-edit.component';
import { ClienteListComponent } from './Components/cliente-list/cliente-list.component';
import { ClienteArticuloComponent } from './Components/cliente-articulo/cliente-articulo.component';

@NgModule({
  declarations: [
    AppComponent,
    TiendasListComponent,
    HomeComponent,
    TiendaAddComponent,
    TiendaEditComponent,
    ArticuloListComponent,
    ArticuloAddComponent,
    ArticuloEditComponent,
    ArticuloTiendaComponent,
    ClienteAddComponent,
    ClienteEditComponent,
    ClienteListComponent,
    ClienteArticuloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
