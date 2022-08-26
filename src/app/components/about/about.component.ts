import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['../../../styles.css']
})
export class AboutComponent implements OnInit {
  aboutData: any; 
  constructor(private datos:PortfolioService) { }

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data => {
      console.log(data)
      this.aboutData = data
    })
  }

}
