import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Logger} from '../services/logger.service';


@Injectable({
  providedIn: 'root'
})

export class HttpClientWrapperService {
  private logger: Logger;

  private apiURL = environment.base_api_url;

  httpOptions = {
    // withCredentials: true
  };

  constructor(private httpClient: HttpClient) {
    this.logger = new Logger('HttpClientWrapperService');
  }

  get<T>(url: string, params?): Observable<T> {
    return this.httpClient
      .get<T>(this.apiURL + url, {...this.httpOptions, params}).pipe(
        catchError(this.handleError<T>('get:' + url, null))
      );
  }

  delete<T>(url: string, params?): Observable<T> {
    return this.httpClient
      .delete<T>(this.apiURL + url, {...this.httpOptions, params}).pipe(
        catchError(this.handleError<T>('delete:' + url, null))
      );
  }

  post<T>(url: string, body, params?): Observable<T> {
    return this.httpClient
      .post<T>(this.apiURL + url, body, {...this.httpOptions, params}).pipe(
        catchError(this.handleError<T>('post:' + url, null))
      );
  }

  put<T>(url: string, body, params?): Observable<T> {
    return this.httpClient
      .put<T>(this.apiURL + url, body, {...this.httpOptions, params}).pipe(
        catchError(this.handleError<T>('put:' + url, null))
      );
  }

  private handleError<T>(operation, result?: T) {
    return (error: any): Observable<T> => {
      this.logger.error(operation, error);
      return throwError(error);
    };
  }
}
