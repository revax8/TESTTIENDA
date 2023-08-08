import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClienteArticulo, ClienteXArticulo } from '../Models/Tienda.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteArticuloService {
  url = "https://revax.somee.com/api/";

  constructor(private http : HttpClient) { }

  add(nuevaTienda: ClienteArticulo):Observable<ClienteArticulo>{
    return this.http.post<ClienteArticulo>(this.url+"ClienteArticulo/Add",nuevaTienda);
  }

  getTiendaXArticulo(idCliente: number, idTienda: number): Observable<ClienteXArticulo[]> {
    console.log('ID',idCliente)
    return this.http.get<ClienteXArticulo[]>(this.url + 'ClienteArticulo/GetTiendaXArticulo?idCliente=' + idCliente+'&idTienda='+idTienda);
  }
}
