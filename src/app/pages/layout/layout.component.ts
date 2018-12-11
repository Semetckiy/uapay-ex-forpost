import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from '../../shared/store.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})

export class LayoutComponent implements OnInit {

  public ticket;
  public isLoggedIn;

  constructor(
    private store: StoreService,
    private router: Router
  ) {
    this.isLoggedIn = false;
  }

  ngOnInit() {
    this.ticket = this.store.get('ticket');
    if (this.ticket) {
      console.log('logged!');
      this.isLoggedIn = true;
      // this.router.navigate(['/device-rro']);
      console.log('router: ', this.router);
    } else {
      console.log('not logged!');
      this.isLoggedIn = false;
      this.router.navigate(['/authentication']);
    }
  }

}
