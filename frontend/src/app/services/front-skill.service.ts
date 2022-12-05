import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../model/skill.model';

@Injectable({
  providedIn: 'root'
})
export class FrontSkillService {
  url = "https://portfolio-backend-production-b985.up.railway.app/frontskill/"
  constructor(private http:HttpClient) { }

  public getAllFrontSkill(): Observable<Skill[]>{
    return this.http.get<Skill[]>(this.url + "traer");
  }

  public getFrontSkillById(id:number): Observable<Skill>{
    return this.http.get<Skill>(this.url + "traer/" + id);
  }

  public deleteSkillById(id:number):Observable<any>{
    return this.http.delete(this.url + "borrar/" + id,{responseType: 'text'});
  }

  public addFrontSkill(frontSkill: Skill): Observable<any>{
    return this.http.post(this.url + "agregar",frontSkill,{responseType: 'text'});
  }

  public editFrontSkill(id:number,frontSkill:Skill): Observable<any>{
    return this.http.put(this.url + "editar/" + id,frontSkill,{responseType: 'text'});
  }

}
