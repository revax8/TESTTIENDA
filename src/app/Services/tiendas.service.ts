import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Tienda } from '../Models/Tienda.model';

@Injectable({
  providedIn: 'root'
})
export class TiendasService {
  url = "http://revax.somee.com/api/";

 constructor(private http : HttpClient) { }

  getAll(): Observable<Tienda[]>{
    return  this.http.get<Tienda[]>(this.url+ "Tienda/GetAll");
  }
  add(nuevaTienda: Tienda):Observable<Tienda>{
    return this.http.post<Tienda>(this.url+"Tienda/Add",nuevaTienda);
  }
  getId(id: string): Observable<Tienda> {
    const parsedId = parseInt(id, 10);
    return this.http.get<Tienda>(this.url + 'Tienda/' + parsedId);
  }
  update(id: number, tienda : Tienda) : Observable<Tienda>{
    return this.http.put<Tienda>(this.url+'Tienda/Update?id='+id,tienda);
  }
  delete(id: number) : Observable<Boolean>{
    console.log('id',id);
    return this.http.delete<boolean>(this.url+ 'Tienda/Delete?id='+id);
  }

}
