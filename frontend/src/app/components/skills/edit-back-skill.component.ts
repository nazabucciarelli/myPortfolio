import { Component, OnInit } from '@angular/core';
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
  constructor(private backSkillService:BackSkillService, private router: Router, private ActRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.backSkillService.getBackSkillById(this.id).subscribe(
      data =>{
        this.backSkill = data
      }
    )
  }

  onClose():void {
    this.router.navigate(['']);
  }

  onEdit():void{
    this.backSkillService.editBackSkill(this.id,this.backSkill).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        this.router.navigate(['']);
      }
    )
  }

  onDelete():void{
    this.backSkillService.deleteBackSkillById(this.id).subscribe(
      data =>{
        this.router.navigate([''])
      }, err => {
        this.router.navigate([''])
      }
    )
  }
}
