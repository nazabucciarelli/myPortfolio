import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Certification } from 'src/app/model/certification.model';
import { CertificationService } from 'src/app/services/certification.service';

@Component({
  selector: 'app-new-certification',
  templateUrl: './new-certification.component.html',
  styleUrls: ['./new-certification.component.css']
})
export class NewCertificationComponent implements OnInit {
  url_certificado = ""
  constructor(private certificationServ:CertificationService, private router: Router) { }

  ngOnInit(): void {
  }

  onClose():void{
    this.router.navigate([""])
  }

  onCreate():void{
    this.certificationServ.saveCertification(new Certification(this.url_certificado)).subscribe(
      data => {
        this.router.navigate([''])
        console.log("works!")
      }, err => {
        alert("Error: Debes llenar todos los campos/Límite de caracteres excedido");
        console.error("error!")
      }
    )
  }
}
