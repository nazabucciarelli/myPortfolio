import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/model/login-usuario.model';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})
export class ModalLoginComponent implements OnInit {
  isLogged = false;
  isLogginFail = false;
  loginUsuario : LoginUsuario;
  nombreUsuario : string = '';
  password : string = "";
  roles: string[] = [];
  errMsg: string = "Ocurrió un error";

  constructor(private dialog:MatDialog, private tokenService: TokenService, private authService: AuthService, private router: Router, private fb: FormBuilder) { }
  
  loginForm = this.fb.group({
    nombreUsuario: ['', [Validators.required,Validators.maxLength(20)]],
    password:['', [Validators.required]]
  })

    

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
    this.loginForm.value
  }

  onLogin(): void{
    this.nombreUsuario = this.loginForm.get('nombreUsuario').value;
    this.password = this.loginForm.get('password').value;
    this.loginUsuario = new LoginUsuario(this.nombreUsuario,this.password);
    this.authService.login(this.loginUsuario).subscribe(data => {
      this.isLogged = true;
      this.isLogginFail = false;
      this.tokenService.setToken(data.token);
      this.tokenService.setUsername(data.nombreUsuario);
      this.tokenService.setAuthorities(data.authorities);
      this.roles = data.authorities;
      this.dialog.closeAll();
      window.location.reload();
    }, err =>{
      this.isLogged = false;
      this.isLogginFail = true;
      console.log(this.errMsg);
      alert("Ha ocurrido un error");
    } 
    );
  }

  closeModal(){
    this.dialog.closeAll()
  }

}