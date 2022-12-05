import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../model/skill.model';

@Injectable({
  providedIn: 'root'
})
export class BackSkillService {
  url = "https://portfolio-backend-production-b985.up.railway.app/backskill/"
  constructor(private http:HttpClient) { }
  public getAllBackSkill(): Observable<Skill[]>{
    return this.http.get<Skill[]>(this.url + "traer");
  }

  public getBackSkillById(id:number): Observable<Skill>{
    return this.http.get<Skill>(this.url + "traer/" + id);
  }

  public deleteBackSkillById(id:number):Observable<any>{
    return this.http.delete(this.url + "borrar/" + id,{responseType: 'text'});
  }

  public addBackSkill(backSkill: Skill): Observable<any>{
    return this.http.post(this.url + "agregar",backSkill,{responseType: 'text'});
  }

  public editBackSkill(id:number,backSkill:Skill): Observable<any>{
    return this.http.put(this.url + "editar/" + id,backSkill,{responseType: 'text'});
  }
}
