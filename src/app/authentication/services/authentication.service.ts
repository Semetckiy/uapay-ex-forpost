import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {

  path = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  login(credentials) {
    const promise = new Promise((resolve, reject) => {
      const req = this.http.get(this.path + 'login')
        .subscribe(
          (success: any) => {
            resolve(success);
          },
          error => {
            resolve(error);
          }
        );
    });
    return promise;
  }

}
