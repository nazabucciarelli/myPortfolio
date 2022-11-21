import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill.model';
import { OtraSkillService } from 'src/app/services/otra-skill.service';

@Component({
  selector: 'app-new-otra-skill',
  templateUrl: './new-otra-skill.component.html',
  styleUrls: ['./new-otra-skill.component.css']
})
export class NewOtraSkillComponent implements OnInit {
  nombre: String;
  icono:String;
  progreso:number;
  constructor(private router:Router, private otraSkillService:OtraSkillService) { }

  ngOnInit(): void {
  }

  onClose():void{
    this.router.navigate(['']);
  }

  onCreate():void{
    this.otraSkillService.addOtraSkill(new Skill(this.nombre,this.icono,this.progreso)).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
        this.router.navigate([''])
      }
    )
  }

}
