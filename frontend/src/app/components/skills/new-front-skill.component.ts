import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill.model';
import { FrontSkillService } from 'src/app/services/front-skill.service';

@Component({
  selector: 'app-new-front-skill',
  templateUrl: './new-front-skill.component.html',
  styleUrls: ['./new-front-skill.component.css']
})
export class NewFrontSkillComponent implements OnInit {
  nombre: String;
  icono:String;
  progreso:number;
  constructor(private router:Router, private frontSkillService:FrontSkillService) { }

  ngOnInit(): void {
  }

  onClose():void{
    this.router.navigate(['']);
  }

  onCreate():void{
    this.frontSkillService.addFrontSkill(new Skill(this.nombre,this.icono,this.progreso)).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
        this.router.navigate([''])
      }
    )
  }
}
