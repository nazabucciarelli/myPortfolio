import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-new-experience',
  templateUrl: './new-experience.component.html',
  styleUrls: ['./new-experience.component.css']
})
export class NewExperienceComponent implements OnInit {
  nombre: String = ""
  descripcion: String = ""
  periodo: String = ""
  logo_empresa: String = ""
  constructor(private expService:ExperienciaService, private dialog:MatDialog) {
    

   }

  ngOnInit(): void {
  }

  onCreate(): void{
    let exp = new Experiencia(this.nombre,this.descripcion,this.periodo,this.logo_empresa)
    this.expService.saveExperiencia(exp).subscribe(data=>{console.log("works")},err => {console.error("doesn't works")});
    location.reload()
  }

  closeModal(): void{
    this.dialog.closeAll()
  }



}
