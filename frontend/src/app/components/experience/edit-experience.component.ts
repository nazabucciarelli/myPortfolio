import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-edit-experience',
  templateUrl: './edit-experience.component.html',
  styleUrls: ['./edit-experience.component.css']
})
export class EditExperienceComponent implements OnInit {
  exp: Experiencia = new Experiencia("","","","");
  id = this.activatedRoute.snapshot.params['id'];

  constructor(private router:Router, private expService:ExperienciaService,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.expService.getDetallesExperiencia(this.id).subscribe(
      data => {
        this.exp = data
      },err => {
        console.error("error")
        this.router.navigate([''])
      }
    )
  }

  onClose():void{
    this.router.navigate([''])
  }

  onEdit():void{
    this.expService.editExperiencia(this.id, this.exp).subscribe(
         data => { 
        console.log("works") 
        this.router.navigate([''])},
         err => {
        alert("Error:  Debes llenar todos los campos/Límite de caracteres excedido");
        console.error("error");
      }
    )
  }

  onDelete():void{
    this.expService.deleteExperiencia(this.id).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
        alert("Error: ha ocurrido un error");
        console.error("error");
      }
    )
  }

}
