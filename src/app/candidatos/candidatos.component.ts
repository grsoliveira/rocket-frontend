import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidato } from '../model/candidato.model';
import { CandidatoService } from '../service/candidato.service';

@Component({
  selector: 'app-candidatos',
  templateUrl: './candidatos.component.html',
  styleUrls: ['./candidatos.component.scss']
})
export class CandidatosComponent implements OnInit {

  public candidatos: Candidato[] = [];

  msg: string = '';

  constructor(public candidatoService : CandidatoService,
              public router: Router,
              public activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    const mensangem = this.activatedRoute.snapshot.paramMap.get('msg');
    if (mensangem) {
      this.msg = mensangem;
    } else {
      this.msg = '';
    }

    this.candidatoService.listarCandidatos().subscribe((result) => {
      this.candidatos = result;
    });
  }

  administrarCandidato(id: number) {
    this.router.navigate(['/administrar', id]);
  }


}
