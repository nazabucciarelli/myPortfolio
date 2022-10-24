import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalLoginComponent } from '../modal-login/modal-login.component';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../../../styles.css']
})
export class HeaderComponent implements OnInit {
  socialsData:any;
  persona: Persona = new Persona('','','','','','','','','');
  constructor(public personaService: PersonaService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {
      this.persona = data
    })
  }

  openDialog(){
    this.dialog.open(ModalLoginComponent)
  }

}
