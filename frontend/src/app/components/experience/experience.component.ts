import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experiencia: Experiencia[] = [];
  constructor(private expService:ExperienciaService) { }

  ngOnInit(): void {
    this.getExperiencias();
  }

  getExperiencias(): void{
    this.expService.getExperiencias().subscribe(
      data => {this.experiencia = data}
    )
  }

}
