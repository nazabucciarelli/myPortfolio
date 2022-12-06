import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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
  constructor(private certificationServ:CertificationService, private router: Router, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  closeDialog():void{
    this.dialog.closeAll();
    window.location.reload();
  }

  onCreate():void{
    this.certificationServ.saveCertification(new Certification(this.url_certificado)).subscribe(
      data => {
        this.closeDialog();
        console.log("works!")
      }, err => {
        alert("Ha ocurrido un error");
        console.error("error!")
      }
    )
  }


}
