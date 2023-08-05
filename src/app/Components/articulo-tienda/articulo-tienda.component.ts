import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticuloTiendum, Tienda, TiendaXArticulo } from 'src/app/Models/Tienda.model';
import { ArticuloTiendaService } from 'src/app/Services/articulo-tienda.service';
import { TiendasService } from 'src/app/Services/tiendas.service';
import { DatePipe, formatDate } from '@angular/common';

@Component({
  selector: 'test-articulo-tienda',
  templateUrl: './articulo-tienda.component.html',
  styleUrls: ['./articulo-tienda.component.css']
})
export class ArticuloTiendaComponent  implements OnInit{  
  
   tiendas : TiendaXArticulo [] = [];
  idArticulo = 0;
  articuloTienda : ArticuloTiendum = {
    id: 0,
    idArticulo: 0,
    idTienda: 0,
    fecha: ""    
  };

  constructor(private articuloTiendaService : ArticuloTiendaService
             ,private activatedRoute : ActivatedRoute
             ,private router : Router) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe({
      next: (res) => {
        const idParam = res.get('id');
        this.idArticulo = idParam ? parseInt(idParam, 10) : 0;
      }
    });
    this.carga();
  }

  carga(){
    this.articuloTiendaService.getTiendaXArticulo(this.idArticulo).subscribe({
      next: (articulosTiendas) =>{
        // console.log(tiendas);
        this.tiendas = articulosTiendas;
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

   asignaTienda(idTienda : number):void {
    const fecha = formatDate(new Date(), 'yyyy-MM-dd', 'en-US')
    this.articuloTienda.idTienda = idTienda;
    this.articuloTienda.idArticulo = this.idArticulo;    
    this.articuloTienda.fecha =  fecha;
         
     this.articuloTiendaService.add(this.articuloTienda).subscribe({
      next: (res) => {
        console.log(res);
        this.carga();
      }
     })
   }
  
}
