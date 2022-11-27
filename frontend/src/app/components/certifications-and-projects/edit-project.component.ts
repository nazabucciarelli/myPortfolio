import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto.model';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {
  proy: Proyecto = new Proyecto("","","","","");
  id:number = this.actRoute.snapshot.params['id'];
  constructor(private router: Router, private actRoute: ActivatedRoute, private proyService:ProyectoService) { }

  ngOnInit(): void {
    this.proyService.getProyectoById(this.id).subscribe(
      data =>{
        this.proy = data;
      }
    )
  }

  onDelete():void{
    this.proyService.deleteProyecto(this.id).subscribe(
      data =>{
        this.router.navigate([''])
      }, err => {
        alert("Error: Ha ocurrido un error");
      }
    )
  }

  onEdit():void{
    this.proyService.editProyecto(this.id,this.proy).subscribe(
      data => {
        this.router.navigate(['']);
        console.log('works');
      }, err => {
        alert("Error: Debes llenar todos los campos/Límite de caracteres excedido");
        console.error('error')
      }
    )
  }

  onClose():void{
    this.router.navigate(['']);
  }
}
