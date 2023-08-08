import { Injectable } from '@angular/core';
import { Articulo } from '../Models/Tienda.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  url = "https://revax.somee.com/api/";
  constructor(private http : HttpClient) { }

  getAll(): Observable<Articulo[]>{
    return  this.http.get<Articulo[]>(this.url+ "Articulo/GetAll");
  }
  add(nuevaArticulo: Articulo):Observable<Articulo>{
    return this.http.post<Articulo>(this.url+"Articulo/Add",nuevaArticulo);
  }
  getId(id: string): Observable<Articulo> {
    const parsedId = parseInt(id, 10);
    return this.http.get<Articulo>(this.url + 'Articulo/' + parsedId);
  }
  update(id: number, tienda : Articulo) : Observable<Articulo>{
    return this.http.put<Articulo>(this.url+'Articulo/Update?id='+id,tienda);
  }
  delete(id: number) : Observable<Boolean>{
    return this.http.delete<boolean>(this.url+ 'Articulo/Delete?id='+id);
  }
}
