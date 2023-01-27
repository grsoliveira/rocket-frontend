import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidato } from '../model/candidato.model';
import { CandidatoService } from '../service/candidato.service';

@Component({
  selector: 'app-administrar-candidado',
  templateUrl: './administrar-candidado.component.html',
  styleUrls: ['./administrar-candidado.component.scss']
})
export class AdministrarCandidadoComponent implements OnInit {

  public candidato: Candidato | undefined;

  foto: SafeResourceUrl = '';
  documento: SafeResourceUrl = '';
  comprovante: SafeResourceUrl = '';

  constructor(public activatedRoute: ActivatedRoute,
              public router: Router,
              public candidatoService: CandidatoService,
              private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    if (id) {
      this.candidatoService.getPorId(id).subscribe((result) => {
        this.candidato = result;

        if (this.candidato.foto) {
          this.foto = this.apresentarFoto(this.candidato.foto);
        }
        if (this.candidato.documento) {
          this.documento = this.apresentarFoto(this.candidato.documento);
        }
        if (this.candidato.comprovante) {
          this.comprovante = this.apresentarFoto(this.candidato.comprovante);
        }

      });
    }
  }

  apresentarFoto(base64Imagem : string) : SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + base64Imagem);
  }

  aprovar() {
    this.candidatoService.aprovar(this.candidato?.id).subscribe((result) => {
      // this.router.navigateByUrl('/candidatos');
      this.router.navigate(['/candidatos', 'Candidato aprovado com sucesso']);
    });
  }

  reprovar() {
    this.candidatoService.reprovar(this.candidato?.id).subscribe((result) => {
      // this.router.navigateByUrl('/candidatos');
      this.router.navigate(['/candidatos', 'Candidato reprovado com sucesso']);
    });
  }
}
