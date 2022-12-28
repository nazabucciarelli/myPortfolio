import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/services/educacion.service';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-new-education',
  templateUrl: './new-education.component.html',
  styleUrls: ['./new-education.component.css']
})
export class NewEducationComponent implements OnInit {
  nombre: string = "";
  descripcion: string ="";
  periodo: string = "";
  logo_educacion: string = "";
  constructor(private eduService:EducacionService, private router:Router, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  closeDialog(){
    this.dialog.closeAll();
    window.location.reload();
  }

  onCreate(): void{
    let edu = new Educacion(this.nombre,this.descripcion,this.periodo,this.logo_educacion)
    this.eduService.saveEducacion(edu).subscribe(
      data => { 
        this.closeDialog();
      }, 
      err => { 
      alert("Ha ocurrido un error");
      console.error("error");
    }
    )
  }

}
