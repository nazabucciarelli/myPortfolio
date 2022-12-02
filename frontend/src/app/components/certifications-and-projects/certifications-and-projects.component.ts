import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Certification } from 'src/app/model/certification.model';
import { Proyecto } from 'src/app/model/proyecto.model';
import { CertificationService } from 'src/app/services/certification.service';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { TokenService } from 'src/app/services/token.service';
import { EditCertificationComponent } from './edit-certification.component';
import { EditProjectComponent } from './edit-project.component';
import { NewCertificationComponent } from './new-certification.component';
import { NewProjectComponent } from './new-project.component';

@Component({
  selector: 'app-certifications-and-projects',
  templateUrl: './certifications-and-projects.component.html',
  styleUrls: ['./certifications-and-projects.component.css']
})
export class CertificationsAndProjectsComponent implements OnInit {
  certificationsData: any = [];
  projectsData: any = [];
  isLogged = false;
  constructor(private certService:CertificationService, private proyService:ProyectoService, private tokenService:TokenService, private dialog: MatDialog) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    this.certService.getAllCertificacion().subscribe(
      data => {
        this.certificationsData = data
      }
    )
    this.proyService.getAllProyecto().subscribe(
      data =>{
        this.projectsData = data
      }
    )
  }

  openNewCertificationDialog(){
    this.dialog.open(NewCertificationComponent);
  }

  openEditCertificationDialog(cert: Certification){
    this.dialog.open(EditCertificationComponent,{
      disableClose: true,
      data: cert
    })
  }

  openNewProjectDialog(){
    this.dialog.open(NewProjectComponent);
  }

  openEditProjectDialog(proy: Proyecto){
    this.dialog.open(EditProjectComponent,{
      disableClose: true,
      data: proy
    });
  }

}
