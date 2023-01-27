import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth-guard.service';
import { CadastroCandidatoComponent } from './cadastro-candidato/cadastro-candidato.component';
import { CandidatosComponent } from './candidatos/candidatos.component';
import { ConsultaCandidatoComponent } from './consulta-candidato/consulta-candidato.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cadastro', component: CadastroCandidatoComponent},
  {path: 'consulta', component: ConsultaCandidatoComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
