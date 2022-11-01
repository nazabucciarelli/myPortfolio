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
  exp: Experiencia = null;
  constructor(private router:Router, private expService:ExperienciaService,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.expService.getDetallesExperiencia(id).subscribe(
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
    const id = this.activatedRoute.snapshot.params['id'];
    this.expService.editExperiencia(id, this.exp).subscribe(
         data => { 
        console.log("works") 
        this.router.navigate([''])},
         err => {
        console.error("doesn't works")
        this.router.navigate([''])
      }
    )
  }

  onDelete():void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.expService.deleteExperiencia(id).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
        console.error("error");
        this.router.navigate(['']);
      }
    )
  }

}
