import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router'; 
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorService implements HttpInterceptor  {

  constructor(private router: Router) { }


   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

   const token = localStorage.getItem('token');   
  
    // console.log("getting token from - ", token);

    if (token) {
      const auth_req = req.clone({
        setHeaders: {
          Authorization: token
        }
      });

      return next.handle(auth_req).pipe(
        catchError(error => {
          console.error('HTTP error occurred:', error);
          if (error.status === 401) {
            localStorage.removeItem('token');
            this.router.navigate(['/auth/signin']);
          }


      return throwError(error);
    })
  );
    }

    return next.handle(req);
  }
}
