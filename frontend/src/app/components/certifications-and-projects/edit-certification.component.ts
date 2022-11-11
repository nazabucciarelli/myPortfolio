import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-certification',
  templateUrl: './edit-certification.component.html',
  styleUrls: ['./edit-certification.component.css']
})
export class EditCertificationComponent implements OnInit {
  url_certificado: string;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClose():void{
    this.router.navigate([''])
  }

  onEdit():void{

  }

  onDelete():void{

  }

}
