import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { Autenticacao } from './autenticacao.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService,
    private router: Router) { }

  ngOnInit(): void {
  }

  fazerLogin(formLogin: any) {
    this.loginService.login(formLogin.value).subscribe((resp) => {
      console.log(resp);
      this.router.navigateByUrl('/candidatos');
    },
    (err) => {
      console.log(err);
    });
  }

}
