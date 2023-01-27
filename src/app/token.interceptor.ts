import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';
import { LoginService } from './service/login.service';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private loginService: LoginService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const tokenString = localStorage.getItem('token');
    if (tokenString) {
      const headers: HttpHeaders = new HttpHeaders({ Authorization: tokenString })

      // Setting Authorization header for all requests after authenticated
      if (tokenString) {
        const authRequest = request.clone({ headers });
        return next.handle(authRequest)
          .pipe(
            catchError((error) => {
              if (error instanceof HttpErrorResponse) {
                // Logout user if token has expired
                if (error.status === 403) {
                  this.loginService.logout();
                  console.error(error);
                }
                // Logout user if connection failed
                if (error.status === 0) {
                  console.error(error);
                  this.loginService.logout();
                }
              }
              return throwError(error);
            }),
        )
      }
    }


    return next.handle(request);
  }

}
