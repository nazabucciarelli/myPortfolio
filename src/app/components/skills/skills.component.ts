import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Skill } from 'src/app/model/skill.model';
import { BackSkillService } from 'src/app/services/back-skill.service';
import { FrontSkillService } from 'src/app/services/front-skill.service';
import { OtraSkillService } from 'src/app/services/otra-skill.service';
import { TokenService } from 'src/app/services/token.service';
import { EditBackSkillComponent } from './edit-back-skill.component';
import { EditFrontSkillComponent } from './edit-front-skill.component';
import { EditOtraSkillComponent } from './edit-otra-skill.component';
import { NewBackSkillComponent } from './new-back-skill.component';
import { NewFrontSkillComponent } from './new-front-skill.component';
import { NewOtraSkillComponent } from './new-otra-skill.component';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  frontendSkillsData: any = [];
  backendSkillsData: any = [];
  otrasSkillsData: any = [];
  isLogged = false;
  constructor(private frontSkillService: FrontSkillService,private backSkillService: BackSkillService, 
    private otraSkillService: OtraSkillService, private tokenService: TokenService, private dialog: MatDialog) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else{
      this.isLogged = false;
    }
    this.frontSkillService.getAllFrontSkill().subscribe(
      data => {
        this.frontendSkillsData = data;
      }
    )
    this.backSkillService.getAllBackSkill().subscribe(
      data =>{
        this.backendSkillsData = data;
      }
    )
    this.otraSkillService.getAllOtraSkill().subscribe(
      data =>{
        this.otrasSkillsData = data;
      }
    )
  }

  openNewFrontSkillDialog(){
    this.dialog.open(NewFrontSkillComponent);
  }

  
  openNewBackSkillDialog(){
    this.dialog.open(NewBackSkillComponent);
  }

  
  openNewOtraSkillDialog(){
    this.dialog.open(NewOtraSkillComponent);
  }

  openEditFrontSkillDialog(skill: Skill){
    this.dialog.open(EditFrontSkillComponent, {
      disableClose: true,
      data: skill
    })
  }

  openEditBackSkillDialog(skill: Skill){
    this.dialog.open(EditBackSkillComponent, {
      disableClose: true,
      data: skill
    })
  }

  openEditOtraSkillDialog(skill: Skill){
    this.dialog.open(EditOtraSkillComponent, {
      disableClose: true,
      data: skill
    })
  }
}
