import { Inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../models/user.model";

const url = 'tasks/users';

@Injectable({
  providedIn: 'root'
})
export class UsersHttpService {

  constructor(@Inject('API_BASE') private API_BASE: string,
              private httpClient: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.API_BASE + url);
  }
}
