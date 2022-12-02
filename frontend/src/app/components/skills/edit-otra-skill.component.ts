import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/model/skill.model';
import { OtraSkillService } from 'src/app/services/otra-skill.service';

@Component({
  selector: 'app-edit-otra-skill',
  templateUrl: './edit-otra-skill.component.html',
  styleUrls: ['./edit-otra-skill.component.css']
})
export class EditOtraSkillComponent implements OnInit {
  otraSkill : Skill = new Skill("","",0);
  id:number = this.ActRoute.snapshot.params['id'];
  constructor(private otraSkillService:OtraSkillService, private router: Router, private ActRoute:ActivatedRoute, private dialog:MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: Skill) { }

  ngOnInit(): void {
    this.otraSkillService.getOtraSkillById(this.data.id).subscribe(
      data =>{
        this.otraSkill = data
      }
    )
  }

  closeDialog(){
    this.dialog.closeAll();
    window.location.reload();
  }

  onEdit():void{
    this.otraSkillService.editOtraSkill(this.data.id,this.data).subscribe(
      data => {
        this.closeDialog()
        console.log("works")
      }, err => {
        alert("Ha ocurrido un error");
        console.error("error");
      }
    )
  }

  onDelete():void{
    this.otraSkillService.deleteOtraSkillById(this.data.id).subscribe(
      data =>{
        this.closeDialog();
      }, err => {
        alert("Ha ocurrido un error");
        console.error("error");
      }
    )
  }

}
