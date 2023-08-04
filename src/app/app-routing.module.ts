import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TiendasListComponent } from './components/tiendas-list/tiendas-list.component';
import { HomeComponent } from './components/home/home.component';
import { TiendaAddComponent } from './Components/tienda-add/tienda-add.component';
import { TiendaEditComponent } from './Components/tienda-edit/tienda-edit.component';


const routes: Routes = [
  {
    path: 'tiendas-list',
    component: TiendasListComponent
  },
  {
    path:'',
    component: HomeComponent
  },
  {
    path: 'tienda-add',
    component: TiendaAddComponent
  },
  {
    path: 'tienda-edit/:id'
    ,component: TiendaEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
