import { Component, OnInit } from '@angular/core';
import { CertificationService } from 'src/app/services/certification.service';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-certifications-and-projects',
  templateUrl: './certifications-and-projects.component.html',
  styleUrls: ['./certifications-and-projects.component.css']
})
export class CertificationsAndProjectsComponent implements OnInit {
  certificationsData: any = [];
  projectsData: any = [];
  isLogged = false;
  constructor(private certService:CertificationService, private proyService:ProyectoService, private tokenService:TokenService) { }

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

}
