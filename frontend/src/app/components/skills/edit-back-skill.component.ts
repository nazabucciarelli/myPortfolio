import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/model/skill.model';
import { BackSkillService } from 'src/app/services/back-skill.service';

@Component({
  selector: 'app-edit-back-skill',
  templateUrl: './edit-back-skill.component.html',
  styleUrls: ['./edit-back-skill.component.css']
})
export class EditBackSkillComponent implements OnInit {
  backSkill : Skill = new Skill("","",0);
  id:number = this.ActRoute.snapshot.params['id'];
  constructor(private backSkillService:BackSkillService, private router: Router, private ActRoute:ActivatedRoute, private dialog:MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: Skill) { }

  ngOnInit(): void {
    this.backSkillService.getBackSkillById(this.data.id).subscribe(
      data =>{
        this.backSkill = data
      }
    )
  }

  closeDialog(){
    this.dialog.closeAll();
    window.location.reload();
  }

  onEdit():void{
    this.backSkillService.editBackSkill(this.data.id,this.data).subscribe(
      data => {
        this.closeDialog();
      }, err => {
        alert("Ha ocurrido un error");
        console.error("error");
      }
    )
  }

  onDelete():void{
    this.backSkillService.deleteBackSkillById(this.data.id).subscribe(
      data =>{
        this.closeDialog();
      }, err => {
        alert("Ha ocurrido un error");
        console.error("error");
      }
    )
  }
}
