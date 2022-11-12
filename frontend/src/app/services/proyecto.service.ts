import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/proyecto.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  url = "http://localhost:8080/proyecto/";
  constructor(private http:HttpClient) { }

  public getAllProyecto(): Observable<Proyecto[]>{
    return this.http.get<Proyecto[]>(this.url + "traer");
  }

  public getProyectoById(id:number): Observable<Proyecto>{
    return this.http.get<Proyecto>(this.url + "traer/" + id);
  }

  public addProyecto(proy : Proyecto): Observable<any>{
    return this.http.post<any>(this.url + "agregar",proy);
  }

  public deleteProyecto(id:number): Observable<any>{
    return this.http.delete<any>(this.url + "borrar/" + id);
  }

  public editProyecto(id:number,proy: Proyecto): Observable<any>{
    return this.http.put(this.url + "editar/" + id,proy);
  }
}
