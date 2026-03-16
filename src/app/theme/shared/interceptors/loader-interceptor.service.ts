import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { finalize } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderInterceptorService implements HttpInterceptor {
private requestCount = 0;
  constructor(private spinner: NgxSpinnerService) {}
  

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('HTTP Request intercepted loader:', req.url);
    this.requestCount++;

      if (this.requestCount === 1) {
    this.spinner.show();
  }

  return next.handle(req).pipe(
    finalize(() => {

      this.requestCount--;

      if (this.requestCount === 0) {
        this.spinner.hide();
      }

    })
  );
  }
}