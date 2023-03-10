import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  msg: string = '';

  constructor(private loginService: LoginService,
    private router: Router) { }

  ngOnInit(): void {
  }

  fazerLogin(formLogin: NgForm) {

    this.loginService.login(formLogin.value).subscribe(
      data => {
        if(data.body != null) {
          let token = data.body.token;
          localStorage.setItem("token", token);

        this.router.navigateByUrl('/candidatos');
        } else {
          console.error(data);
          console.error("Login error.");
        }
        this.msg = '';
      },
      error => {
        this.msg = 'Usuário ou senha inválidos';
      },
    );
  }



}
