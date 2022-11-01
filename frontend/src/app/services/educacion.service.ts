import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion.model';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  url = "http://localhost:8080/educacion/"
  constructor(private http: HttpClient) { }

  public getAllEducacion(): Observable<Educacion[]>{
    return this.http.get<Educacion[]>(this.url + "traer");
  }

  public getDetallesEducacion(id:number): Observable<Educacion>{
    return this.http.get<Educacion>(this.url + `traer/${id}`)
  }

  public editEducacion(id:number,edu:Educacion):Observable<any>{
    return this.http.put<any>(this.url + `editar/${id}`,edu);
  }

  public saveEducacion(edu:Educacion): Observable<any>{
    return this.http.post<any>(this.url + 'agregar',edu)
  }

  public deleteEducacion(id:number): Observable<any>{
    return this.http.delete<any>(this.url + `borrar/${id}`)
  }

}
