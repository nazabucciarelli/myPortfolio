import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto.model';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {
  proy: Proyecto = new Proyecto("","","","","");
  id:number = this.actRoute.snapshot.params['id'];
  constructor(private router: Router, private actRoute: ActivatedRoute, private proyService:ProyectoService,
    private dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: Proyecto) { }

  ngOnInit(): void {
    this.proyService.getProyectoById(this.data.id).subscribe(
      data =>{
        this.proy = data;
      }
    )
  }

  onDelete():void{
    this.proyService.deleteProyecto(this.data.id).subscribe(
      data =>{
        this.closeDialog();
      }, err => {
        alert("Ha ocurrido un error");
      }
    )
  }

  onEdit():void{
    this.proyService.editProyecto(this.data.id,this.data).subscribe(
      data => {
        this.closeDialog();
        console.log('works');
      }, err => {
        alert("Ha ocurrido un error");
        console.error('error')
      }
    )
  }

  closeDialog(){
    this.dialog.closeAll();
    window.location.reload();
  }
}
