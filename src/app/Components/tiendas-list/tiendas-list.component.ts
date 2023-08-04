import { Component, OnInit } from '@angular/core';
import { Tienda } from 'src/app/Models/Tienda.model';
import { TiendasService } from 'src/app/Services/tiendas.service';

@Component({
  selector: 'test-tiendas-list',
  templateUrl: './tiendas-list.component.html',
  styleUrls: ['./tiendas-list.component.css']
})
export class TiendasListComponent  implements OnInit{
  tiendas : Tienda[] = [];
  constructor(private tiendaService : TiendasService) {}
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
  }




}
