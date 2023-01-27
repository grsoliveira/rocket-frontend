import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CandidatoService } from '../service/candidato.service';

@Component({
  selector: 'app-consulta-candidato',
  templateUrl: './consulta-candidato.component.html',
  styleUrls: ['./consulta-candidato.component.scss']
})
export class ConsultaCandidatoComponent implements OnInit {

  candidato: any = null;

  constructor(private candidatoService: CandidatoService,
    private router: Router) { }

  ngOnInit(): void {
    this.candidato = null;
  }

  consulta(consultaCandidatoForm: any) {

    this.candidatoService.consultarCandidatos(consultaCandidatoForm.value.cpf, consultaCandidatoForm.value.senha).subscribe((resp) => {
      console.log(resp);
      this.candidato = resp;
      // this.router.navigateByUrl('');
    },
    (err) => {
      console.log(err);
    });
  }

}
