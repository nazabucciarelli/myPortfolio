import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalLoginComponent } from '../modal-login/modal-login.component';
import { HeaderService } from 'src/app/services/header.service';
import { Header } from 'src/app/model/header.model';
import { TokenService } from 'src/app/services/token.service';
import { EditHeaderComponent } from './edit-header.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../../../styles.css']
})  
export class HeaderComponent implements OnInit {
  header: Header = new Header("","","");
  isLogged = false;
  constructor( private dialog:MatDialog, private headerServ: HeaderService, private tokenService: TokenService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else{
      this.isLogged = false;
    }
    this.headerServ.getHeader().subscribe(
      data => {
        this.header = data;
      })
  }

  onLogout():void{
    this.tokenService.logOut();
    window.location.reload();
  }

  openDialog(){
    this.dialog.open(ModalLoginComponent);
  }

  openEditLinksDialog(){
    this.dialog.open(EditHeaderComponent, {disableClose: true}
      );
  }
}
