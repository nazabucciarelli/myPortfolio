import { Component, OnInit } from '@angular/core';
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
  constructor(private otraSkillService:OtraSkillService, private router: Router, private ActRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.otraSkillService.getOtraSkillById(this.id).subscribe(
      data =>{
        this.otraSkill = data
      }
    )
  }

  onClose():void {
    this.router.navigate(['']);
  }

  onEdit():void{
    this.otraSkillService.editOtraSkill(this.id,this.otraSkill).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error:  Debes llenar todos los campos/Límite de caracteres excedido");
        console.error("error");
      }
    )
  }

  onDelete():void{
    this.otraSkillService.deleteOtraSkillById(this.id).subscribe(
      data =>{
        this.router.navigate([''])
      }, err => {
        console.error("error");
      }
    )
  }

}
