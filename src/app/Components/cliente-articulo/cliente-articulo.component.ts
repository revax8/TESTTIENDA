import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteArticulo, ClienteXArticulo, Tienda } from 'src/app/Models/Tienda.model';
import { ClienteArticuloService } from 'src/app/Services/cliente-articulo.service';
import { TiendasService } from 'src/app/Services/tiendas.service';

@Component({
  selector: 'test-cliente-articulo',
  templateUrl: './cliente-articulo.component.html',
  styleUrls: ['./cliente-articulo.component.css']
})
export class ClienteArticuloComponent {
  tiendas : Tienda[] = [];
  clientes : ClienteXArticulo [] = [];
  idCliente = 0;
  idTienda = 0;
  clienteArticulo : ClienteArticulo = {
    idCliente: 0,
    idArticulo: 0,
    fecha: '',
    // idArticuloNavigation: [],
    // idClienteNavigation: Cliente;
  };

  constructor(private clienteArticuloService : ClienteArticuloService
             ,private activatedRoute : ActivatedRoute
             ,private router : Router
             ,private tiendaService : TiendasService) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe({
      next: (res) => {
        const idParam = res.get('id');
        this.idCliente = idParam ? parseInt(idParam, 10) : 0;
      }
    });
    this.cargaTiendas();
    // this.carga();
  }

  carga(){
    this.clienteArticuloService.getTiendaXArticulo(this.idCliente, this.idTienda).subscribe({
      next: (articulosTiendas) =>{
         console.log(articulosTiendas);
        this.clientes = articulosTiendas;
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

   asignaArticulo(idTienda : number):void {
    const fecha = formatDate(new Date(), 'yyyy-MM-dd', 'en-US')
    this.clienteArticulo.idArticulo = idTienda;
    this.clienteArticulo.idCliente = this.idCliente;    
    this.clienteArticulo.fecha =  fecha;
         
     this.clienteArticuloService.add(this.clienteArticulo).subscribe({
      next: (res) => {
        console.log(res);
        this.carga();
      }
     })
   }

   cargaTiendas(): void{
    this.tiendaService.getAll().subscribe({
      next: (tiendas) =>{
        this.tiendas = tiendas;
      },
      error: (error) => {
        console.log(error)
      }
    })
   }

   seleccionarSucursal(id:any):void{
console.log(id.target.value);
this.idTienda = id.target.value;
console.log('ssss',this.idTienda);
this.carga();
   }
  
}
