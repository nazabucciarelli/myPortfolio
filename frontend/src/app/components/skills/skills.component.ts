import { Component, OnInit } from '@angular/core';
import { FrontSkillService } from 'src/app/services/front-skill.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  frontendSkillsData: any;
  backendSkillsData: any;
  communicationSkillsData: any;
  constructor(private frontSkillService: FrontSkillService) { }

  ngOnInit(): void {
    this.frontSkillService.getAllFrontSkill().subscribe(
      data => {
        this.frontendSkillsData = data
      }
    )
  }

}
