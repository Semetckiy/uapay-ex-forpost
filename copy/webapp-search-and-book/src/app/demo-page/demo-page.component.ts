import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { selectLoggedIn } from '../core.reducer';

@Component({
  selector: 'app-demo-page',
  templateUrl: './demo-page.component.html',
  styleUrls: ['./demo-page.component.css']
})
export class DemoPageComponent implements OnInit {

  loggedIn$: Observable<boolean>;

  constructor(private store: Store<any>, private loginService: LoginService) {
    this.loginService.getClpConfig();
    this.loggedIn$ = this.store.pipe(select(selectLoggedIn));
  }
  ngOnInit() {
  }

}
