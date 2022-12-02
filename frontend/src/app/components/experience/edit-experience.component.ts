import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-edit-experience',
  templateUrl: './edit-experience.component.html',
  styleUrls: ['./edit-experience.component.css']
})
export class EditExperienceComponent implements OnInit {
  exp: Experiencia = new Experiencia("","","","");
  id = this.activatedRoute.snapshot.params['id'];

  constructor(private router:Router, private expService:ExperienciaService,private activatedRoute: ActivatedRoute, public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: Experiencia) { }

  ngOnInit(): void {
    this.expService.getDetallesExperiencia(this.data.id).subscribe(
      data => {
        this.exp = data
      },err => {
        console.error("error")
        this.router.navigate([''])
      }
    )
  }

  onEdit():void{
    this.expService.editExperiencia(this.data.id, this.data).subscribe(
         data => { 
          this.closeDialog();},
         err => {
        alert("Ha ocurrido un error");
        console.error("error");
      }
    )
  }

  onDelete():void{
    this.expService.deleteExperiencia(this.data.id).subscribe(
      data => {
        this.closeDialog();
        window.location.reload();
      }, err =>{
        alert("Ha ocurrido un error");
        console.error("error");
      }
    )
  }

  closeDialog(){
    this.dialog.closeAll();
    window.location.reload();
  }

}
