import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-certifications-and-projects',
  templateUrl: './certifications-and-projects.component.html',
  styleUrls: ['./certifications-and-projects.component.css']
})
export class CertificationsAndProjectsComponent implements OnInit {
  certificationsData: any;
  projectsData: any;
  constructor(private datos:PortfolioService) { }

  ngOnInit(): void {
    //this.datos.obtenerDatos().subscribe(data => {
      //this.certificationsData = data.certifications;
      //this.projectsData = data.projects
    //})
  }

}
