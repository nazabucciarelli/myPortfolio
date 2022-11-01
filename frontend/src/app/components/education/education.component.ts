import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educacion: Educacion[] = [];
  constructor(private eduService: EducacionService) { }

  ngOnInit(): void {
    this.getAllEducacion()
  }

  getAllEducacion():void{
    this.eduService.getAllEducacion().subscribe(
      data => {
        this.educacion = data
      }
    )
  }

}
