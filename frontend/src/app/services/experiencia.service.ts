import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Experiencia } from '../model/experiencia.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  url = "https://portfolio-backend-production-b985.up.railway.app/experiencia/"

  constructor(private http: HttpClient) {}

  public getExperiencias(): Observable<Experiencia[]>{
      return this.http.get<Experiencia[]>(this.url + 'lista');
   }

   public getDetallesExperiencia(id: number): Observable<Experiencia>{
    return this.http.get<Experiencia>(this.url + `detalles/${id}`)
   }

   public saveExperiencia(exp:Experiencia): Observable<any>{
    return this.http.post(this.url + 'agregar',exp, {responseType: 'text'})
   }

   public editExperiencia(id:number,exp:Experiencia): Observable<any>{
      return this.http.put(this.url + `editar/${id}`,exp, {responseType: 'text'});
   }

   public deleteExperiencia(id:number): Observable<any>{
    return this.http.delete(this.url + `borrar/${id}` ,{responseType: 'text'})
   }
}
