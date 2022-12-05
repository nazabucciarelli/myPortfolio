import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/proyecto.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  url = "https://portfolio-backend-production-b985.up.railway.app/proyecto/";
  constructor(private http:HttpClient) { }

  public getAllProyecto(): Observable<Proyecto[]>{
    return this.http.get<Proyecto[]>(this.url + "traer");
  }

  public getProyectoById(id:number): Observable<Proyecto>{
    return this.http.get<Proyecto>(this.url + "traer/" + id);
  }

  public addProyecto(proy : Proyecto): Observable<any>{
    return this.http.post(this.url + "agregar",proy,{responseType: 'text'});
  }

  public deleteProyecto(id:number): Observable<any>{
    return this.http.delete(this.url + "borrar/" + id,{responseType: 'text'});
  }

  public editProyecto(id:number,proy: Proyecto): Observable<any>{
    return this.http.put(this.url + "editar/" + id,proy,{responseType: 'text'});
  }
}
