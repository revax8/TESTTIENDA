import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticuloTiendum, Tienda } from 'src/app/Models/Tienda.model';
import { ArticuloTiendaService } from 'src/app/Services/articulo-tienda.service';
import { TiendasService } from 'src/app/Services/tiendas.service';
import { DatePipe } from '@angular/common';

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
    fecha: new Date(),
  };
  pipe = new DatePipe('en-US');
  constructor(private tiendaService : TiendasService
             ,private articuloTiendaService : ArticuloTiendaService
             ,private activatedRoute : ActivatedRoute) {}

  ngOnInit(): void {
    this.tiendaService.getAll().subscribe({
      next: (tiendas) =>{
        console.log(tiendas);
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
  changedDate = '';
   asignaTienda(idTienda : number):void {
    console.log('Si esntro a asignatienda');
    this.articuloTienda.idTienda = idTienda;
    this.articuloTienda.idArticulo = this.idArticulo;
    this.articuloTienda.fecha = this.datePipe.transform(this.articuloTienda.fecha, 'dd/MM/yyyy');
    
    this.articuloTienda.fecha.setHours(0, 0, 0, 0); 
    let ChangedFormat = this.pipe.transform(this.articuloTienda.fecha, 'dd/MM/YYYY');
    this.changedDate = ChangedFormat;
    this.pipe.transform(this.articuloTienda.fecha, 'dd/MM/YYYY');
console.log(this.changedDate);
this.articuloTienda.fecha =this.changedDate;
     this.articuloTiendaService.add(this.articuloTienda)
   }
  
}
