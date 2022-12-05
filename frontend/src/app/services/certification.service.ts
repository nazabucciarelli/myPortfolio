import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Certification } from '../model/certification.model';

@Injectable({
  providedIn: 'root'
})
export class CertificationService {
  url = "https://portfolio-backend-production-b985.up.railway.app/certificacion/"
  constructor(private http: HttpClient) { }

  public getAllCertificacion(): Observable<Certification[]>{
    return this.http.get<Certification[]>(this.url + "traer");
  }

  public getCertificationById(id: number): Observable<Certification>{
    return this.http.get<Certification>(this.url + "traer/" + id);
  }

  public saveCertification(cert:Certification): Observable<any>{
    return this.http.post(this.url + "agregar", cert,{responseType: 'text'});
  }

  public editCertification(id:number,cert:Certification):Observable<any>{
    return this.http.put(this.url + `editar/${id}`, cert,{responseType: 'text'})
  }

  public deleteCertificationById(id:number): Observable<any>{
    return this.http.delete(this.url + `borrar/${id}`,{responseType: 'text'})
  }
}
