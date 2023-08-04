import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Tienda } from 'src/app/Models/Tienda.model';
import { TiendasService } from 'src/app/Services/tiendas.service';

@Component({
  selector: 'test-tienda-edit',
  templateUrl: './tienda-edit.component.html',
  styleUrls: ['./tienda-edit.component.css']
})
export class TiendaEditComponent implements OnInit{
  tiendaEdit: Tienda= {
    sucursal:''
    ,direccion:''
    ,id: 0
    ,articuloTienda: []
  };
constructor(private activatedRoute : ActivatedRoute, private tiendaService: TiendasService, private router : Router) {}
  
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe({
      next: (res) => {
       const id = res.get('id');
       if (id != null) {
          this.tiendaService.getId(id).subscribe({
            next : (response)=> {
              this.tiendaEdit = response;
            }

          })
       }
      }
    })
  }
  editTienda(){
    this.tiendaService.update(this.tiendaEdit.id,this.tiendaEdit).subscribe({
      next: (response) =>{
        console.log(response);
        this.router.navigate(['tiendas-list']);
      }
    })
  }

  deleteTienda(){
    this.tiendaService.delete(this.tiendaEdit.id).subscribe({
      next: (response) =>{
        if (response) {
          this.router.navigate(['tiendas-list']);
        }else {
          console.log('Problema al eliminar registro');
        } 
      }
    })
  }

}
