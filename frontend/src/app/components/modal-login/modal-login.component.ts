import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})
export class ModalLoginComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  closeModal(){
    this.dialog.closeAll()
  }

}
