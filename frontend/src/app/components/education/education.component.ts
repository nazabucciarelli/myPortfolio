import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educationData:any;
  constructor(private datos: PortfolioService) { }

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data => {
      this.educationData = data.education
    })
  }

}
