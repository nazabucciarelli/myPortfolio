import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Header } from '../model/header.model';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  url = "http://localhost:8080/header/"
  constructor(private http:HttpClient) { 
  }

  public getHeader():Observable<Header>{
    return this.http.get<Header>(this.url + "traer")
  }

  public editHeader(he:Header):Observable<any>{
    return this.http.put(this.url + "editar",he,{responseType: 'text'});
  }
}
