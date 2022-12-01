import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { TokenService } from 'src/app/services/token.service';
import { EditExperienceComponent } from './edit-experience.component';
import { NewExperienceComponent } from './new-experience.component';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experiencia: Experiencia[] = [];
  isLogged = false;
  constructor(private expService:ExperienciaService, private tokenService: TokenService, private dialog: MatDialog) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else{
      this.isLogged = false;
    }
    this.getExperiencias();
  }

  getExperiencias(): void{
    this.expService.getExperiencias().subscribe(
      data => {this.experiencia = data}
    )
  }

  openDialog(){
    this.dialog.open(NewExperienceComponent);
  }

  openEditDialog(exp:Experiencia){
    this.dialog.open(EditExperienceComponent, {
      disableClose: true,
      data: exp
    })
  }

}
