import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Articulo } from 'src/app/Models/Tienda.model';
import { ArticuloService } from 'src/app/Services/articulo.service';


@Component({
  selector: 'test-articulo-add',
  templateUrl: './articulo-add.component.html',
  styleUrls: ['./articulo-add.component.css']
})
export class ArticuloAddComponent {
  articuloNuevo: Articulo= {
    codigo:''
    ,descripcion:''
    ,stock: 0
    ,precio: 0
    ,imagen: ''
    ,articuloTienda : []
    ,id:0
    ,clienteArticulos : []
  };

  constructor(private articuloService : ArticuloService, private router : Router) {
  }
  addArticulo():void{
    this.articuloService.add(this.articuloNuevo).subscribe({
      next: (respone) => {
        console.log(respone);
        this.router.navigate(['articulos-list']);
      }
    })
  }

}
