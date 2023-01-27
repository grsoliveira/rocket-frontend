import { registerLocaleData } from '@angular/common';
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

  constructor(private candidatoService: CandidatoService,
              private router: Router) { }

  ngOnInit(): void {
  }

  cadastro(cadastroCandidatoForm: NgForm) {

    cadastroCandidatoForm.value.foto = this.fotoProcessada;
    cadastroCandidatoForm.value.documento = this.documentoProcessado;
    cadastroCandidatoForm.value.comprovante = this.comprovanteProcessado;

    this.candidatoService.cadastrarCandidato(cadastroCandidatoForm.value).subscribe((resp) => {
      console.log(resp);
      this.router.navigateByUrl('');
    },
    (err) => {
      console.log(err);
    });
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
