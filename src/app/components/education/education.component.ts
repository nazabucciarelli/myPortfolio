import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/services/educacion.service';
import { TokenService } from 'src/app/services/token.service';
import { EditEducationComponent } from './edit-education.component';
import { NewEducationComponent } from './new-education.component';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educacion: Educacion[] = [];
  isLogged = false;
  constructor(private eduService: EducacionService, private tokenService: TokenService, private dialog: MatDialog) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else{
      this.isLogged = false;
    }
    this.getAllEducacion()
  }

  getAllEducacion():void{
    this.eduService.getAllEducacion().subscribe(
      data => {
        this.educacion = data
      }
    )
  }

  openDialog(){
    this.dialog.open(NewEducationComponent);
  }

  openEditDialog(edu: Educacion){
    this.dialog.open(EditEducationComponent,{
      disableClose: true,
      data: edu
    })
  }

}
