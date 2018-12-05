import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Fields as loginFields } from '../models/login-fields.model';
import {map} from 'rxjs/internal/operators';

@Injectable()

export class LoginService {

  results = '';
  URL = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  init(): Observable<boolean> {
    this.results = '';
    return of(true);
  }

  login(): Observable<boolean> {
    return this.http.get(this.URL + 'login').pipe(map((results: any) => {
      console.log('results: ', results);
      this.results = results;
      return true;
    }));
  }

}
