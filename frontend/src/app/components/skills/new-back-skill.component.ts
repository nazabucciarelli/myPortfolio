import { Component, OnInit } from '@angular/core';
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
  constructor(private router:Router, private backSkillService:BackSkillService) { }

  ngOnInit(): void {
  }

  onClose():void{
    this.router.navigate(['']);
  }

  onCreate():void{
    this.backSkillService.addBackSkill(new Skill(this.nombre,this.icono,this.progreso)).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
        this.router.navigate([''])
      }
    )
  }

}
