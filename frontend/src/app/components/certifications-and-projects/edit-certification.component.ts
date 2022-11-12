import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Certification } from 'src/app/model/certification.model';
import { CertificationService } from 'src/app/services/certification.service';

@Component({
  selector: 'app-edit-certification',
  templateUrl: './edit-certification.component.html',
  styleUrls: ['./edit-certification.component.css']
})
export class EditCertificationComponent implements OnInit {
  cert: Certification = null;
  id:number = this.actRoute.snapshot.params['id'];
  constructor(private router: Router, private actRoute:ActivatedRoute, private certificationServ:CertificationService) { }

  ngOnInit(): void {
    this.certificationServ.getCertificationById(this.id).subscribe(
      data =>{
        this.cert = data;
      }
    )
  }

  onClose():void{
    this.router.navigate([''])
  }

  onEdit():void{
    this.certificationServ.editCertification(this.id,this.cert).subscribe(
      data=> {
        this.router.navigate(['']);
        console.log("works")
      }, err => {
        this.router.navigate(['']);
        console.error("error")
      }
    )
  }

  onDelete():void{
    this.certificationServ.deleteCertificationById(this.id).subscribe(
      data => { this.router.navigate([''])}, err =>
      { this.router.navigate([''])}
    )
  }

}
