import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill.model';
import { BackSkillService } from 'src/app/services/back-skill.service';

@Component({
  selector: 'app-new-back-skill',
  templateUrl: './new-back-skill.component.html',
  styleUrls: ['./new-back-skill.component.css']
})
export class NewBackSkillComponent implements OnInit {
  nombre: String;
  icono:String;
  progreso:number;
  constructor(private router:Router, private backSkillService:BackSkillService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  closeDialog():void{
    this.dialog.closeAll();
    window.location.reload();
  }

  onCreate():void{
    this.backSkillService.addBackSkill(new Skill(this.nombre,this.icono,this.progreso)).subscribe(
      data => {
        this.closeDialog()
      }, err =>{
        alert("Ha ocurrido un error");
        console.error("error");      }
    )
  }

}
