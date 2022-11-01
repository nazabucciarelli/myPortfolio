import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-new-experience',
  templateUrl: './new-experience.component.html',
  styleUrls: ['./new-experience.component.css']
})
export class NewExperienceComponent implements OnInit {
  nombre: String = ""
  descripcion: String = ""
  periodo: String = ""
  logo_empresa: String = ""
  constructor(private expService:ExperienciaService, private router:Router) {
   }

  ngOnInit(): void {
  }

  onCreate(): void{
    let exp = new Experiencia(this.nombre,this.descripcion,this.periodo,this.logo_empresa)
    this.expService.saveExperiencia(exp).subscribe(data=>{
      this.router.navigate([''])},err => {
        this.router.navigate([''])});
    
  }

  onClose():void{
    this.router.navigate([''])
  }

}
