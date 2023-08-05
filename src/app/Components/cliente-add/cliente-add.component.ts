import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/Models/Tienda.model';
import { ClienteService } from 'src/app/Services/cliente.service';

@Component({
  selector: 'test-cliente-add',
  templateUrl: './cliente-add.component.html',
  styleUrls: ['./cliente-add.component.css']
})
export class ClienteAddComponent {
  clienteNuevo: Cliente= {
    nombre:''
    ,apellidos:''
    ,direccion: ''
    ,id:0
    ,clienteArticulos : []
  };

  constructor(private articuloService : ClienteService, private router : Router) {
  }
  addCliente():void{
    this.articuloService.add(this.clienteNuevo).subscribe({
      next: (respone) => {
        console.log(respone);
        this.router.navigate(['clientes-list']);
      }
    })
  }
}
