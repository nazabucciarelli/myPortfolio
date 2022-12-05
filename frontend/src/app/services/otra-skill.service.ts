import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../model/skill.model';

@Injectable({
  providedIn: 'root'
})
export class OtraSkillService {
  url = "https://portfolio-backend-production-b985.up.railway.app/otraskill/"
  constructor(private http:HttpClient) { }
  public getAllOtraSkill(): Observable<Skill[]>{
    return this.http.get<Skill[]>(this.url + "traer");
  }

  public getOtraSkillById(id:number): Observable<Skill>{
    return this.http.get<Skill>(this.url + "traer/" + id);
  }

  public deleteOtraSkillById(id:number):Observable<any>{
    return this.http.delete(this.url + "borrar/" + id,{responseType: 'text'});
  }

  public addOtraSkill(otraSkill: Skill): Observable<any>{
    return this.http.post(this.url + "agregar",otraSkill,{responseType: 'text'});
  }

  public editOtraSkill(id:number,otraSkill:Skill): Observable<any>{
    return this.http.put(this.url + "editar/" + id,otraSkill,{responseType: 'text'});
  }
}
