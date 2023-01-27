export class WsResponse {
  constructor(public sucesso: boolean, public mensagem: string, public objeto: any, public listaObjetos: any[]) {

  }
}
