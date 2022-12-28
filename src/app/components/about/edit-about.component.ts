import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-edit-about',
  templateUrl: './edit-about.component.html',
  styleUrls: ['./edit-about.component.css']
})
export class EditAboutComponent implements OnInit {
  pers: Persona = new Persona("","","","","","")
  constructor(private persService:PersonaService,private router: Router, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.persService.getPersona().subscribe(
      data => {
        console.log("works")
        this.pers = data
      }, err =>{
        console.error("error");
      }
    )

  }

  onEdit():void{
    this.persService.editPersona(this.pers).subscribe(
      data =>{
        console.log("works");
        this.closeDialog();
        window.location.reload();
      }, err => {
        alert("Ha ocurrido un error");
        console.error("error");
      }
    )
  }

  closeDialog():void{
    this.dialog.closeAll();
  }

}
