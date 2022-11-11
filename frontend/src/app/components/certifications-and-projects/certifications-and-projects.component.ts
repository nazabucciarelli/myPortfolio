import { Component, OnInit } from '@angular/core';
import { CertificationService } from 'src/app/services/certification.service';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-certifications-and-projects',
  templateUrl: './certifications-and-projects.component.html',
  styleUrls: ['./certifications-and-projects.component.css']
})
export class CertificationsAndProjectsComponent implements OnInit {
  certificationsData: any;
  projectsData: any;
  constructor(private certService:CertificationService) { }

  ngOnInit(): void {
    this.certService.getAllCertificacion().subscribe(
      data => {
        this.certificationsData = data
      }
    )
  }

}
