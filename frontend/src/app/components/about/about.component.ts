import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/services/persona.service';
import { TokenService } from 'src/app/services/token.service';
import { EditAboutComponent } from './edit-about.component';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['../../../styles.css']
})
export class AboutComponent implements OnInit {
  persona: Persona = new Persona('','','','','','');
  isLogged = false;
  constructor(public personaService: PersonaService, private tokenService: TokenService, private dialog: MatDialog) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else{
      this.isLogged = false;
    }
    this.personaService.getPersona().subscribe(data => {this.persona = data})
  }


  openDialog(){
    this.dialog.open(EditAboutComponent);
  }

}
