import { Component, OnInit } from '@angular/core';
import { Articulo } from 'src/app/Models/Tienda.model';
import { ArticuloService } from 'src/app/Services/articulo.service';

@Component({
  selector: 'test-articulo-list',
  templateUrl: './articulo-list.component.html',
  styleUrls: ['./articulo-list.component.css']
})
export class ArticuloListComponent implements OnInit{
  articulos : Articulo[] = [];
  constructor(private articuloService : ArticuloService) {}
  ngOnInit(): void {
    this.articuloService.getAll().subscribe({
      next: (articulos) =>{
        // console.log(articulos);
        this.articulos = articulos;
      },
      error: (error) => {
        console.log(error)
      }
    })
  }
}
