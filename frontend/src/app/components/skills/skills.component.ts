import { Component, OnInit } from '@angular/core';
import { BackSkillService } from 'src/app/services/back-skill.service';
import { FrontSkillService } from 'src/app/services/front-skill.service';
import { OtraSkillService } from 'src/app/services/otra-skill.service';
import { TokenService } from 'src/app/services/token.service';

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
    private otraSkillService: OtraSkillService, private tokenService: TokenService) { }

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

}
