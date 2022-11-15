import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../model/skill.model';

@Injectable({
  providedIn: 'root'
})
export class BackSkillService {
  url = "http://localhost:8080/backskill/"
  constructor(private http:HttpClient) { }
  public getAllBackSkill(): Observable<Skill[]>{
    return this.http.get<Skill[]>(this.url + "traer");
  }

  public getBackSkillById(id:number): Observable<Skill>{
    return this.http.get<Skill>(this.url + "traer/" + id);
  }

  public deleteBackSkillById(id:number):Observable<any>{
    return this.http.delete<any>(this.url + "borrar/" + id);
  }

  public addBackSkill(backSkill: Skill): Observable<any>{
    return this.http.post<any>(this.url + "agregar",backSkill);
  }

  public editBackSkill(id:number,backSkill:Skill): Observable<any>{
    return this.http.put<any>(this.url + "editar/" + id,backSkill);
  }
}
