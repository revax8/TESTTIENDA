import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../Models/Tienda.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

 
  
  url = "https://revax.somee.com/api/";
  constructor(private http : HttpClient) { }

  getAll(): Observable<Cliente[]>{
    return  this.http.get<Cliente[]>(this.url+ "Cliente/GetAll");
  }
  add(nuevaArticulo: Cliente):Observable<Cliente>{
    return this.http.post<Cliente>(this.url+"Cliente/Add",nuevaArticulo);
  }
  getId(id: string): Observable<Cliente> {
    const parsedId = parseInt(id, 10);
    return this.http.get<Cliente>(this.url + 'Cliente/' + parsedId);
  }
  update(id: number, tienda : Cliente) : Observable<Cliente>{
    return this.http.put<Cliente>(this.url+'Cliente/Update?id='+id,tienda);
  }
  delete(id: number) : Observable<Boolean>{
    return this.http.delete<boolean>(this.url+ 'Cliente/Delete?id='+id);
  }
}
