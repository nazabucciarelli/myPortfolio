import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/model/skill.model';
import { FrontSkillService } from 'src/app/services/front-skill.service';

@Component({
  selector: 'app-edit-front-skill',
  templateUrl: './edit-front-skill.component.html',
  styleUrls: ['./edit-front-skill.component.css']
})
export class EditFrontSkillComponent implements OnInit {
  frontSkill : Skill = new Skill("","",0);
  id:number = this.ActRoute.snapshot.params['id'];
  constructor(private frontSkillService:FrontSkillService, private router: Router, private ActRoute:ActivatedRoute, private dialog:MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: Skill) { }

  ngOnInit(): void {
    this.frontSkillService.getFrontSkillById(this.id).subscribe(
      data =>{
        this.frontSkill = data
      }
    )
  }

  closeDialog(){
    this.dialog.closeAll();
    window.location.reload();
  }

  onEdit():void{
    this.frontSkillService.editFrontSkill(this.data.id,this.data).subscribe(
      data => {
        this.closeDialog();
      }, err => {
        alert("Ha ocurrido un error");
        console.error("error");
      }
    )
  }

  onDelete():void{
    this.frontSkillService.deleteSkillById(this.data.id).subscribe(
      data =>{
        this.closeDialog();
      }, err => {
        alert("Ha ocurrido un error");
        console.error("error");
      }
    )
  }

}
