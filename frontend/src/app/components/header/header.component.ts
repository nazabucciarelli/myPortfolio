import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalLoginComponent } from '../modal-login/modal-login.component';
import { HeaderService } from 'src/app/services/header.service';
import { Header } from 'src/app/model/header.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../../../styles.css']
})  
export class HeaderComponent implements OnInit {
  header: Header = null;
  constructor( private dialog:MatDialog, private headerServ: HeaderService) { }

  ngOnInit(): void {
    this.headerServ.getHeader().subscribe(
      data => {
        this.header = data;
      })
  }

  openDialog(){
    this.dialog.open(ModalLoginComponent)
  }

}
