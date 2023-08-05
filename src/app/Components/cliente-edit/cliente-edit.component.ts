import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/Models/Tienda.model';
import { ClienteService } from 'src/app/Services/cliente.service';

@Component({
  selector: 'test-cliente-edit',
  templateUrl: './cliente-edit.component.html',
  styleUrls: ['./cliente-edit.component.css']
})
export class ClienteEditComponent {
  clienteEdit: Cliente= {
    nombre:''
    ,apellidos:''
    ,direccion: ''
    ,id:0
    ,clienteArticulos :[]
  };

  constructor(private activatedRoute : ActivatedRoute, private articuloService: ClienteService, private router : Router) {}
  
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe({
      next: (res) => {
       const id = res.get('id');
       if (id != null) {
          this.articuloService.getId(id).subscribe({
            next : (response)=> {
              this.clienteEdit = response;
            }
          })
       }
      }
    })
  }

  editCliente(){
    this.articuloService.update(this.clienteEdit.id,this.clienteEdit).subscribe({
      next: (response) =>{
         console.log(response);
        this.router.navigate(['clientes-list']);
      }
    })
  }

  deleteCliente(){
    this.articuloService.delete(this.clienteEdit.id).subscribe({
      next: (response) =>{
        if (response) {
          this.router.navigate(['clientes-list']);
        }else {
          console.log('Problema al eliminar registro');
        } 
      }
    })
  }
}
