import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  frontendSkillsData: any;
  backendSkillsData: any;
  communicationSkillsData: any;
  constructor(private datos:PortfolioService) { }

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data => {
      console.log(data)
      this.frontendSkillsData = data.frontendskills;
      this.backendSkillsData = data.backendskills;
      this.communicationSkillsData = data.communicationskills;
    })
  }

}
