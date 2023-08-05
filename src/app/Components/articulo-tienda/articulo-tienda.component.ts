import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticuloTiendum, Tienda } from 'src/app/Models/Tienda.model';
import { ArticuloTiendaService } from 'src/app/Services/articulo-tienda.service';
import { TiendasService } from 'src/app/Services/tiendas.service';
import { DatePipe, formatDate } from '@angular/common';

@Component({
  selector: 'test-articulo-tienda',
  templateUrl: './articulo-tienda.component.html',
  styleUrls: ['./articulo-tienda.component.css']
})
export class ArticuloTiendaComponent  implements OnInit{  
  tiendas : Tienda[] = [];
  idArticulo = 0;
  articuloTienda : ArticuloTiendum = {
    id: 0,
    idArticulo: 0,
    idTienda: 0,
    fecha: ""    
  };

  constructor(private tiendaService : TiendasService
             ,private articuloTiendaService : ArticuloTiendaService
             ,private activatedRoute : ActivatedRoute) {}

  ngOnInit(): void {
    this.tiendaService.getAll().subscribe({
      next: (tiendas) =>{
        // console.log(tiendas);
        this.tiendas = tiendas;
      },
      error: (error) => {
        console.log(error)
      }
    })

    this.activatedRoute.paramMap.subscribe({
      next: (res) => {
        const idParam = res.get('id');
        this.idArticulo = idParam ? parseInt(idParam, 10) : 0;
      }
    });
  }

   asignaTienda(idTienda : number):void {
    const fecha = formatDate(new Date(), 'yyyy-MM-dd', 'en-US')
  //  let articuloTienda2 : ArticuloTiendum = {
  //      id: idTienda,
  //     idArticulo:  this.idArticulo,
  //     idTienda: idTienda,
  //     fecha:  formatDate(new Date(), 'yyyy-MM-dd', 'en-US')
  //   };


    this.articuloTienda.idTienda = idTienda;
    this.articuloTienda.idArticulo = this.idArticulo;
    
    this.articuloTienda.fecha =  fecha;
   
  
    

     this.articuloTiendaService.add(this.articuloTienda).subscribe({
      next: (res) => {
        console.log(res);
      }
     })
   }
  
}
