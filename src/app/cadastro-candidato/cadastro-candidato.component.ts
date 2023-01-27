import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CandidatoService } from '../service/candidato.service';

@Component({
  selector: 'app-cadastro-candidato',
  templateUrl: './cadastro-candidato.component.html',
  styleUrls: ['./cadastro-candidato.component.scss']
})
export class CadastroCandidatoComponent implements OnInit {

  foto: File | undefined;
  documento: File | undefined;
  comprovante: File | undefined;

  constructor(private candidatoService: CandidatoService,
              private router: Router) { }

  ngOnInit(): void {
    this.foto = undefined;
    this.documento = undefined;
    this.comprovante = undefined;
  }

  cadastro(cadastroCandidatoForm: any) {

    if (this.foto) {
      const readerFoto = new FileReader();
      readerFoto.readAsDataURL(this.foto!);
      readerFoto.onload = () => { cadastroCandidatoForm.value.foto = readerFoto.result; };
    }

    if (this.documento) {
      const readerDocumento = new FileReader();
      readerDocumento.readAsDataURL(this.documento!);
      readerDocumento.onload = () => { cadastroCandidatoForm.value.documento = readerDocumento.result; };
    }

    if (this.comprovante) {
      const readerComprovante = new FileReader();
      readerComprovante.readAsDataURL(this.comprovante!);
      readerComprovante.onload = () => { cadastroCandidatoForm.value.comprovante = readerComprovante.result; };
    }

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
      this.foto = event.target.files[0];
    }
  }

  changeDocumento(event: any) {
    if (event.target.files && event.target.files[0]) {
      this.documento = event.target.files[0];
    }
  }

  changeComprovante(event: any) {
    if (event.target.files && event.target.files[0]) {
      this.comprovante = event.target.files[0];
    }
  }



}
