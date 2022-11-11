import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Certification } from '../model/certification.model';

@Injectable({
  providedIn: 'root'
})
export class CertificationService {
  url = "http://localhost:8080/certificacion/"
  constructor(private http: HttpClient) { }

  public getAllCertificacion(): Observable<Certification[]>{
    return this.http.get<Certification[]>(this.url + "traer");
  }

  public getCertificationById(id: number): Observable<Certification>{
    return this.http.get<Certification>(this.url + "traer/" + id);
  }

  public saveCertification(cert:Certification): Observable<any>{
    return this.http.post<any>(this.url + "agregar", cert);
  }

  public editCertification(id:number,cert:Certification):Observable<any>{
    return this.http.put<any>(this.url + `editar/${id}`, cert)
  }

  public deleteCertificationById(id:number): Observable<any>{
    return this.http.delete<any>(this.url + `borrar/${id}`)
  }
}
