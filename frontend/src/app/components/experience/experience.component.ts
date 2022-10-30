import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { NewExperienceComponent } from './new-experience.component';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experiencia: Experiencia[] = [];
  constructor(private datosExp:ExperienciaService,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.getExperiencias();
  }

  getExperiencias(): void{
    this.datosExp.getExperiencias().subscribe(
      data => {this.experiencia = data}
    )
  }

  openDialog(){
    this.dialog.open(NewExperienceComponent)
  }
}
