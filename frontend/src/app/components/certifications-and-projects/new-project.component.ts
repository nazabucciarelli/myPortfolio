import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto.model';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {
  nombre = "";
  descripcion = "";
  fecha = "";
  url_imagen = "";
  github_link = "";

  constructor(private proyService: ProyectoService, private router:Router, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onCreate():void {
    this.proyService.addProyecto(new Proyecto(this.nombre,this.fecha,this.descripcion,this.url_imagen,this.github_link)).subscribe(
      data => {
        this.closeDialog();
        console.log("works")
      }, err => {
        alert("Ha ocurrido un error");
        console.error("error")
      }
    )
  }

  closeDialog():void{
    this.dialog.closeAll();
    window.location.reload();
  }

}
