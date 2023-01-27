import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CadastroCandidatoComponent } from './cadastro-candidato/cadastro-candidato.component';
import { ConsultaCandidatoComponent } from './consulta-candidato/consulta-candidato.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { CandidatosComponent } from './candidatos/candidatos.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroCandidatoComponent,
    ConsultaCandidatoComponent,
    HomeComponent,
    LoginComponent,
    CandidatosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
