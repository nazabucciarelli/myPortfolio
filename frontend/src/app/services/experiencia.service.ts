import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Experiencia } from '../model/experiencia.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  url = "http://localhost:8080/experiencia/"

  constructor(private http: HttpClient) {}

  public getExperiencias(): Observable<Experiencia[]>{
      return this.http.get<Experiencia[]>(this.url + 'lista');
   }

   public getDetallesExperiencia(id: number): Observable<Experiencia>{
    return this.http.get<Experiencia>(this.url + `detalles/${id}`)
   }

   public saveExperiencia(exp:Experiencia): Observable<any>{
    return this.http.post<any>(this.url + 'agregar',exp)
   }

   public editExperiencia(id:number,exp:Experiencia): Observable<any>{
      return this.http.put<any>(this.url + `editar/${id}`,exp);
   }

   public deleteExperiencia(id:number): Observable<any>{
    return this.http.delete<any>(this.url + `borrar/${id}`)
   }
}
