import { DatePipe, registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { CandidatoService } from '../service/candidato.service';

@Component({
  selector: 'app-cadastro-candidato',
  templateUrl: './cadastro-candidato.component.html',
  styleUrls: ['./cadastro-candidato.component.scss']
})
export class CadastroCandidatoComponent implements OnInit {

  fotoProcessada: string | ArrayBuffer | null = null;
  documentoProcessado: string | ArrayBuffer | null = null;
  comprovanteProcessado: string | ArrayBuffer | null = null;

  msg: string = '';

  constructor(private candidatoService: CandidatoService,
              private router: Router,
              private datePipe: DatePipe) { }

  ngOnInit(): void {
  }

  cadastro(cadastroCandidatoForm: NgForm) {
    this.msg = '';

    if (!cadastroCandidatoForm.value.senha) {
      this.msg = 'Campo senha é obrigatório';

    } else {

        try {
          cadastroCandidatoForm.value.nascimento = this.datePipe.transform(cadastroCandidatoForm.value.nascimento, "yyyy-MM-dd");
        } catch(err) {
          this.msg = 'Erro ao converter a data de nascimento';
        }

        cadastroCandidatoForm.value.foto = this.fotoProcessada;
        cadastroCandidatoForm.value.documento = this.documentoProcessado;
        cadastroCandidatoForm.value.comprovante = this.comprovanteProcessado;

        this.candidatoService.cadastrarCandidato(cadastroCandidatoForm.value).subscribe((resp) => {
          this.router.navigate(['/home', 'Candidato cadatrado com sucesso']);
        },
        (err) => {
          this.msg = 'Erro ao realizar cadastro do candidato';
        });
    }

  }

  changeFoto(event: any) {
    if (event.target.files && event.target.files[0]) {
      const foto = event.target.files[0];

      const readerFoto = new FileReader();
      readerFoto.readAsDataURL(foto!);
      readerFoto.onload = () => { this.fotoProcessada = readerFoto.result; };
    }
  }

  changeDocumento(event: any) {
    if (event.target.files && event.target.files[0]) {
      const documento = event.target.files[0];

      const readerDocumento = new FileReader();
      readerDocumento.readAsDataURL(documento!);
      readerDocumento.onload = () => { this.documentoProcessado = readerDocumento.result; };
    }
  }

  changeComprovante(event: any) {
    if (event.target.files && event.target.files[0]) {
      const comprovante = event.target.files[0];

      const readerComprovante = new FileReader();
      readerComprovante.readAsDataURL(comprovante!);
      readerComprovante.onload = () => { this.comprovanteProcessado = readerComprovante.result; };
    }
  }

}
