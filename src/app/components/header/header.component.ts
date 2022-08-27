import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalLoginComponent } from '../modal-login/modal-login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../../../styles.css']
})
export class HeaderComponent implements OnInit {
  socialsData:any;
  constructor(private datos:PortfolioService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data => {
      this.socialsData = data
    })
  }

  openDialog(){
    this.dialog.open(ModalLoginComponent)
  }

}
