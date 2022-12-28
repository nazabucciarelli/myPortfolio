import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion.model';
import { Experiencia } from 'src/app/model/experiencia.model';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-edit-education',
  templateUrl: './edit-education.component.html',
  styleUrls: ['./edit-education.component.css']
})
export class EditEducationComponent implements OnInit {
  edu: Educacion = new Educacion("","","","");

  constructor(private eduService: EducacionService, private router: Router, private actRoute:ActivatedRoute, private dialog: MatDialog, 
    @Inject(MAT_DIALOG_DATA) public data: Educacion) { }

  ngOnInit(): void {
  }

  closeDialog(){
    this.dialog.closeAll();
    window.location.reload();
  }

  onEdit():void {
    this.eduService.editEducacion(this.data.id,this.data).subscribe(
      data=> {
        console.log("works")
        this.closeDialog();
      }, err => {
        alert("Ha ocurrido un error");
        console.error("error")
      }
    )
  }

  onDelete(): void{
    this.eduService.deleteEducacion(this.data.id).subscribe(
      data => { 
        this.closeDialog();
      }, err =>
      { 
        alert("Ha ocurrido un error");
        console.error("error");
      }
    )
  }
}
