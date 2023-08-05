import { Injectable } from '@angular/core';
import { ArticuloTiendum } from '../Models/Tienda.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticuloTiendaService {

  url = "https://localhost:7014/api/";
  constructor(private http : HttpClient) { }

  getAll(): Observable<ArticuloTiendum[]>{
    return  this.http.get<ArticuloTiendum[]>(this.url+ "ArticuloTienda/GetAll");
  }
  add(nuevaTienda: ArticuloTiendum):Observable<ArticuloTiendum>{
   console.log('nuevatienda', nuevaTienda);
   console.log(this.url+"ArticuloTienda/Add");
    return this.http.post<ArticuloTiendum>(this.url+"ArticuloTienda/Add",nuevaTienda);
  }
  getId(id: string): Observable<ArticuloTiendum> {
    const parsedId = parseInt(id, 10);
    return this.http.get<ArticuloTiendum>(this.url + 'ArticuloTienda/' + parsedId);
  }
  update(id: number, tienda : ArticuloTiendum) : Observable<ArticuloTiendum>{
    return this.http.put<ArticuloTiendum>(this.url+'ArticuloTienda/Update?id='+id,tienda);
  }
  delete(id: number) : Observable<Boolean>{
    console.log('id',id);
    return this.http.delete<boolean>(this.url+ 'ArticuloTienda/Delete?id='+id);
  }
}
