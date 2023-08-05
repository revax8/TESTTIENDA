import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Tienda } from 'src/app/Models/Tienda.model';
import { TiendasService } from 'src/app/Services/tiendas.service';

@Component({
  selector: 'test-tienda-add',
  templateUrl: './tienda-add.component.html',
  styleUrls: ['./tienda-add.component.css']
})
export class TiendaAddComponent {
tiendaNueva: Tienda= {
  sucursal:''
  ,direccion:''
  ,id: 0
  ,articuloTienda: []
};

constructor(private tiendasService : TiendasService, private router : Router) {

}
addTienda():void{
  this.tiendasService.add(this.tiendaNueva).subscribe({
    next: (respone) => {
      // console.log(respone);
      this.router.navigate(['tiendas-list']);
    }
  })
}

}
