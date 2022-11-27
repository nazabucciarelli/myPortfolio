import { Component, OnInit } from '@angular/core';
import { BackSkillService } from 'src/app/services/back-skill.service';
import { FrontSkillService } from 'src/app/services/front-skill.service';
import { OtraSkillService } from 'src/app/services/otra-skill.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  frontendSkillsData: any = [];
  backendSkillsData: any = [];
  otrasSkillsData: any = [];
  constructor(private frontSkillService: FrontSkillService,private backSkillService: BackSkillService, private otraSkillService: OtraSkillService) { }

  ngOnInit(): void {
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

}
