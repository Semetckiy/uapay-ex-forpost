import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }

  login(params): Observable<boolean> {
    return this.http.get('/api/login');
  }

}
