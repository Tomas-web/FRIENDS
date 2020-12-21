import {Injectable} from '@angular/core';
import {HttpClientWrapperService} from './http-client-wrapper.service';
import {Observable} from 'rxjs';
import {AnswersModel} from './model/answers.model';

@Injectable({
  providedIn: 'root'
})

export class RequestsService {
  constructor(private httpWrapper: HttpClientWrapperService) {
  }

  getRandomRestaurant(): Observable<any> {
    return this.httpWrapper.get<any>(`/v1/random`, {});
  }

  getAnswersForQuiz(): Observable<AnswersModel[]> {
    return this.httpWrapper.get<AnswersModel[]>(`/v1/answers`, {});
  }

  uploadSelectedAnswers(answers: AnswersModel): Observable<any> {
    return this.httpWrapper.post<AnswersModel>(`/v1/selected`, {answers});
  }

  getCode(code: string): Observable<any> {
    return this.httpWrapper.get<any>(`/v1/code/${code}`, {});
  }

  uploadCode(): Observable<any> {
    return this.httpWrapper.post<any>(`/v1/code`, {});
  }

  deleteCode(code: string): Observable<any> {
    return this.httpWrapper.delete<any>(`/v1/code/${code}`, {});
  }

  getResult(code: string): Observable<any> {
    return this.httpWrapper.get<any>(`/v1/result/${code}`, {});
  }
}
