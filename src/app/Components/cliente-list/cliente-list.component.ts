import { Component } from '@angular/core';
import { Cliente } from 'src/app/Models/Tienda.model';
import { ClienteService } from 'src/app/Services/cliente.service';

@Component({
  selector: 'test-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent {
  clientes : Cliente[] = [];
  constructor(private clienteService : ClienteService) {}
  ngOnInit(): void {
    this.clienteService.getAll().subscribe({
      next: (clientes) =>{
        // console.log(articulos);
        this.clientes = clientes;
      },
      error: (error) => {
        console.log(error)
      }
    })
  }
}
