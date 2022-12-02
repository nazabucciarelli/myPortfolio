import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Certification } from 'src/app/model/certification.model';
import { CertificationService } from 'src/app/services/certification.service';

@Component({
  selector: 'app-edit-certification',
  templateUrl: './edit-certification.component.html',
  styleUrls: ['./edit-certification.component.css']
})
export class EditCertificationComponent implements OnInit {
  cert: Certification = new Certification("");
  id:number = this.actRoute.snapshot.params['id'];
  constructor(private router: Router, private actRoute:ActivatedRoute, private certificationServ:CertificationService,
     private dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: Certification) { }

  ngOnInit(): void {
    this.certificationServ.getCertificationById(this.data.id).subscribe(
      data =>{
        this.cert = data;
      }
    )
  }

  closeDialog(){
    this.dialog.closeAll();
    window.location.reload();
  }

  onEdit():void{
    this.certificationServ.editCertification(this.data.id,this.data).subscribe(
      data=> {
        this.closeDialog()
        console.log("works")
      }, err => {
        alert("Ha ocurrido un error");
        console.error("error")
      }
    )
  }

  onDelete():void{
    this.certificationServ.deleteCertificationById(this.data.id).subscribe(
      data => { 
        this.closeDialog();
        console.log("works");},
         err =>
      { 
        alert("Ha ocurrido un error");
        console.error("error");
      }
    )
  }

}
