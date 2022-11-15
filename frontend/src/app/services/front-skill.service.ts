import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FrontSkill } from '../model/front-skill.model';

@Injectable({
  providedIn: 'root'
})
export class FrontSkillService {
  url = "http://localhost:8080/frontskill/"
  constructor(private http:HttpClient) { }

  public getAllFrontSkill(): Observable<FrontSkill[]>{
    return this.http.get<FrontSkill[]>(this.url + "traer");
  }

  public getFrontSkillById(id:number): Observable<FrontSkill>{
    return this.http.get<FrontSkill>(this.url + "traer/" + id);
  }

  public deleteSkillById(id:number):Observable<any>{
    return this.http.delete<any>(this.url + "borrar/" + id);
  }

  public addFrontSkill(frontSkill: FrontSkill): Observable<any>{
    return this.http.post<any>(this.url + "agregar",frontSkill);
  }

  public editFrontSkill(id:number,frontSkill:FrontSkill): Observable<any>{
    return this.http.put<any>(this.url + "editar/" + id,frontSkill);
  }

}
