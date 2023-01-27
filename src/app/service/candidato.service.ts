import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Candidato } from '../model/candidato.model';


@Injectable({
  providedIn: 'root'
})
export class CandidatoService {

  API = 'http://localhost:9090/api'

  constructor(private http: HttpClient) { }

  public cadastrarCandidato(dados: NgForm) {
    return this.http.request('POST', this.API + '/candidato', {
      body: dados
    });
  }

  public consultarCandidatos(cpf: string, senha: string): Observable<Candidato> {
    return this.http.get<Candidato>(this.API + `/candidato/consulta-situacao/${cpf}/${senha}`);
  }

  public getPorId(id: any): Observable<Candidato> {
    return this.http.get<Candidato>(this.API + `/candidato/getPorId/${id}`);
  }

  public listarCandidatos(): Observable<Candidato[]> {
    return this.http.get<Candidato[]>(this.API + '/candidato/listar');
  }

  public aprovar(id: any) {
    return this.http.get<Candidato>(this.API + `/candidato/aprovar/${id}`);
  }

  public reprovar(id: any) {
    return this.http.get<Candidato>(this.API + `/candidato/reprovar/${id}`);
  }

}
