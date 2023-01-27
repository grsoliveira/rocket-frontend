import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rocket-frontend';

  constructor(public loginService: LoginService) {
  }

  deslogar() {
    this.loginService.logout();

  }
}
