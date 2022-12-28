import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Header } from 'src/app/model/header.model';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-edit-header',
  templateUrl: './edit-header.component.html',
  styleUrls: ['./edit-header.component.css']
})
export class EditHeaderComponent implements OnInit {
  header: Header = new Header("","","");
  constructor(private headerServ:HeaderService, private router:Router, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.headerServ.getHeader().subscribe(
    data =>{
      this.header = data
    }
    )
  }

  closeDialog(){
    this.dialog.closeAll();
    window.location.reload();
  }

  onEdit():void{
    this.headerServ.editHeader(this.header).subscribe(
      data =>{
        console.log("works");
        this.closeDialog();
      }, err =>{
        alert("Ha ocurrido un error");
        console.log("error")
      }
    )
  }


}
