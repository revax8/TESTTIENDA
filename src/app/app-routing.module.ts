import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TiendasListComponent } from './components/tiendas-list/tiendas-list.component';
import { HomeComponent } from './components/home/home.component';
import { TiendaAddComponent } from './Components/tienda-add/tienda-add.component';
import { TiendaEditComponent } from './Components/tienda-edit/tienda-edit.component';
import { ArticuloListComponent } from './Components/articulo-list/articulo-list.component';
import { ArticuloEditComponent } from './Components/articulo-edit/articulo-edit.component';
import { ArticuloAddComponent } from './Components/articulo-add/articulo-add.component';
import { ArticuloTiendaComponent } from './Components/articulo-tienda/articulo-tienda.component';
import { ClienteAddComponent } from './Components/cliente-add/cliente-add.component';
import { ClienteEditComponent } from './Components/cliente-edit/cliente-edit.component';
import { ClienteListComponent } from './Components/cliente-list/cliente-list.component';
import { ClienteArticuloComponent } from './Components/cliente-articulo/cliente-articulo.component';


const routes: Routes = [
  {
    path: 'tiendas-list',
    component: TiendasListComponent
  },  
  {
    path: 'tienda-add',
    component: TiendaAddComponent
  },
  {
    path: 'tienda-edit/:id'
    ,component: TiendaEditComponent
  },
  {
    path: 'articulos-list',
    component: ArticuloListComponent
  },
  {
    path: 'articulo-add',
    component: ArticuloAddComponent
  },
  {
    path: 'articulo-edit/:id'
    ,component: ArticuloEditComponent
  },
  {
    path: 'articulo-tienda/:id'
    ,component: ArticuloTiendaComponent
  },
  {
    path: 'cliente-add',
    component: ClienteAddComponent
  },
  {
    path: 'cliente-edit/:id'
    ,component: ClienteEditComponent
  },
  {
    path: 'clientes-list',
    component: ClienteListComponent
  },
  {
    path: 'cliente-articulo/:id'
    ,component: ClienteArticuloComponent
  },
  {
    path:'**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
