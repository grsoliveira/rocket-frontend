import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CandidatoService {

  API = 'http://localhost:9090/api'

  constructor(private http: HttpClient) { }

  public cadastrarCandidato(dados: any) {
    return this.http.post(this.API + '/candidato', dados);
  }

  public consultarCandidatos(cpf: string, senha: string) {
    return this.http.get(this.API + `/candidato/consulta-situacao/${cpf}/${senha}`);
  }

}
