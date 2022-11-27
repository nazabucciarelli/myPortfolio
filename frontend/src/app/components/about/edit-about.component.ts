import { Component, OnInit } from '@angular/core';
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
  constructor(private persService:PersonaService,private router: Router) { }

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
        this.router.navigate(['']);
      }, err => {
        alert("Error: Debes llenar todos los campos/ Límite de caracteres excedido");
        console.error("error");
      }
    )
  }

  onClose():void{
    this.router.navigate([''])
  }

}
