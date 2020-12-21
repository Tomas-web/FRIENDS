import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private router: Router) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers = {'Content-Type': 'application/json'};
    request = request.clone({
      setHeaders: headers
    });

    return next.handle(request).pipe(catchError(err => {
      const error = (err.error || {}).message || err.message || err.statusText;
      return throwError(error);
    }));
  }
}
