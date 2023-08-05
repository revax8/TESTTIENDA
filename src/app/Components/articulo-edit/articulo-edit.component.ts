import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Articulo } from 'src/app/Models/Tienda.model';
import { ArticuloService } from 'src/app/Services/articulo.service';

@Component({
  selector: 'test-articulo-edit',
  templateUrl: './articulo-edit.component.html',
  styleUrls: ['./articulo-edit.component.css']
})
export class ArticuloEditComponent implements OnInit{
  
  articuloEdit: Articulo= {
    codigo:''
    ,descripcion:''
    ,stock: 0
    ,precio:0
    ,imagen : ''
    ,id : 0
    ,articuloTienda :[]
    ,clienteArticulos :[]
  };

  constructor(private activatedRoute : ActivatedRoute, private articuloService: ArticuloService, private router : Router) {}
  
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe({
      next: (res) => {
       const id = res.get('id');
       if (id != null) {
          this.articuloService.getId(id).subscribe({
            next : (response)=> {
              this.articuloEdit = response;
            }
          })
       }
      }
    })
  }

  editArticulo(){
    this.articuloService.update(this.articuloEdit.id,this.articuloEdit).subscribe({
      next: (response) =>{
        console.log(response);
        this.router.navigate(['articulos-list']);
      }
    })
  }

  deleteTienda(){
    this.articuloService.delete(this.articuloEdit.id).subscribe({
      next: (response) =>{
        if (response) {
          this.router.navigate(['articulos-list']);
        }else {
          console.log('Problema al eliminar registro');
        } 
      }
    })
  }

}
