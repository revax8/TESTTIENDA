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

@NgModule({
  declarations: [
    AppComponent,
    TiendasListComponent,
    HomeComponent,
    TiendaAddComponent,
    TiendaEditComponent
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
