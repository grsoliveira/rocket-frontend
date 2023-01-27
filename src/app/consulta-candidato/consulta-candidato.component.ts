import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Candidato } from '../model/candidato.model';
import { CandidatoService } from '../service/candidato.service';

@Component({
  selector: 'app-consulta-candidato',
  templateUrl: './consulta-candidato.component.html',
  styleUrls: ['./consulta-candidato.component.scss']
})
export class ConsultaCandidatoComponent implements OnInit {

  candidato: Candidato | undefined;
  foto: SafeResourceUrl = '';
  documento: SafeResourceUrl = '';
  comprovante: SafeResourceUrl = '';

  constructor(private candidatoService: CandidatoService,
    private router: Router,
    private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.candidato = undefined;
  }

  consulta(consultaCandidatoForm: NgForm) {

    this.candidatoService.consultarCandidatos(consultaCandidatoForm.value.cpf, consultaCandidatoForm.value.senha).subscribe((resp) => {
      this.candidato = resp;
      if (this.candidato.foto) {
        this.foto = this.apresentarFoto(this.candidato.foto);
      }
      if (this.candidato.documento) {
        this.documento = this.apresentarFoto(this.candidato.documento);
      }
      if (this.candidato.comprovante) {
        this.comprovante = this.apresentarFoto(this.candidato.comprovante);
      }
    },
    (err) => {
      this.candidato = undefined;
    });
  }

  apresentarFoto(base64Imagem : string) : SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + base64Imagem);
  }

}
