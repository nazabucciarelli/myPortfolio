import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  url = "https://portfolio-backend-production-b985.up.railway.app/personas"
  constructor(private http: HttpClient) { }

  public getPersona(): Observable<Persona>{
    return this.http.get<Persona>(this.url + '/traer/perfil');
  }

  public editPersona(pers:Persona): Observable<any>{
    return this.http.put<any>(this.url + "/editar/1",pers);
  }

  

}
