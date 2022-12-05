import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion.model';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  url = "https://portfolio-backend-production-b985.up.railway.app/educacion/"
  constructor(private http: HttpClient) { }

  public getAllEducacion(): Observable<Educacion[]>{
    return this.http.get<Educacion[]>(this.url + "traer");
  }

  public getDetallesEducacion(id:number): Observable<Educacion>{
    return this.http.get<Educacion>(this.url + `traer/${id}`)
  }

  public editEducacion(id:number,edu:Educacion):Observable<any>{
    return this.http.put(this.url + `editar/${id}`,edu,{responseType: 'text'});
  }

  public saveEducacion(edu:Educacion): Observable<any>{
    return this.http.post(this.url + 'agregar',edu,{responseType: 'text'})
  }

  public deleteEducacion(id:number): Observable<any>{
    return this.http.delete(this.url + `borrar/${id}`,{responseType: 'text'})
  }

}
