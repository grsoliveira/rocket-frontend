import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Autenticacao } from '../login/autenticacao.model';
import { WsResponse } from '../login/wsresponse.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  API = 'http://localhost:9090/api'

  constructor(private http: HttpClient) { }

  public login(dados: any) {
    return this.http.post(this.API + '/auth', dados);
  }
}
