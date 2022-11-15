import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FrontSkill } from 'src/app/model/front-skill.model';
import { FrontSkillService } from 'src/app/services/front-skill.service';

@Component({
  selector: 'app-edit-front-skill',
  templateUrl: './edit-front-skill.component.html',
  styleUrls: ['./edit-front-skill.component.css']
})
export class EditFrontSkillComponent implements OnInit {
  frontSkill : FrontSkill = null;
  id:number = this.ActRoute.snapshot.params['id'];
  constructor(private frontSkillService:FrontSkillService, private router: Router, private ActRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.frontSkillService.getFrontSkillById(this.id).subscribe(
      data =>{
        this.frontSkill = data
      }
    )
  }

  onClose():void {
    this.router.navigate(['']);
  }

  onEdit():void{
    this.frontSkillService.editFrontSkill(this.id,this.frontSkill).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        this.router.navigate(['']);
      }
    )
  }

  onDelete():void{
    this.frontSkillService.deleteSkillById(this.id).subscribe(
      data =>{
        this.router.navigate([''])
      }
    )
  }

}
