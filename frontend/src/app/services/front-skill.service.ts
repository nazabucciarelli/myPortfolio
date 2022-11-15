import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../model/skill.model';

@Injectable({
  providedIn: 'root'
})
export class FrontSkillService {
  url = "http://localhost:8080/frontskill/"
  constructor(private http:HttpClient) { }

  public getAllFrontSkill(): Observable<Skill[]>{
    return this.http.get<Skill[]>(this.url + "traer");
  }

  public getFrontSkillById(id:number): Observable<Skill>{
    return this.http.get<Skill>(this.url + "traer/" + id);
  }

  public deleteSkillById(id:number):Observable<any>{
    return this.http.delete<any>(this.url + "borrar/" + id);
  }

  public addFrontSkill(frontSkill: Skill): Observable<any>{
    return this.http.post<any>(this.url + "agregar",frontSkill);
  }

  public editFrontSkill(id:number,frontSkill:Skill): Observable<any>{
    return this.http.put<any>(this.url + "editar/" + id,frontSkill);
  }

}
