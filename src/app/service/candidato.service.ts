import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CandidatoService {

  API = 'http://localhost:9090/api'

  constructor(private http: HttpClient) { }

  public cadastrarCandidato(dados: any) {

    console.log(dados);

    return this.http.post(this.API + '/candidato', dados);
    // return this.http.request('POST', this.API + '/candidato', {
    //   body: dados
    // });
  }

  public consultarCandidatos(cpf: string, senha: string) {
    return this.http.get(this.API + `/candidato/consulta-situacao/${cpf}/${senha}`);
  }

}
