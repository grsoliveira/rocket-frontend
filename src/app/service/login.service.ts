import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Autenticacao } from '../login/autenticacao.model';
import { WsResponse } from '../login/wsresponse.model';
import { UserAuth } from '../model/user-auth.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  API = 'http://localhost:9090/api/login'

  constructor(private http: HttpClient,  private router: Router) { }

  public login(dados: UserAuth) {
    // return this.http.post(this.API + '/auth', dados);
    return this.http.post<any>(this.API, dados, { observe: 'response' });
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token') ? true : false;
    return token;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }
}
