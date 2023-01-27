import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Candidato } from '../model/candidato.model';
import { CandidatoService } from '../service/candidato.service';

@Component({
  selector: 'app-candidatos',
  templateUrl: './candidatos.component.html',
  styleUrls: ['./candidatos.component.scss']
})
export class CandidatosComponent implements OnInit {

  public candidatos: Candidato[] = [];

  constructor(public candidatoService : CandidatoService,
              public router: Router) { }

  ngOnInit(): void {
    this.candidatoService.listarCandidatos().subscribe((result) => {
      this.candidatos = result;
      console.log(this.candidatos);
    });
  }

  administrarCandidato(id: number) {
    console.log('clicou no botao');
    this.router.navigate(['/administrar', id]);
  }


}
