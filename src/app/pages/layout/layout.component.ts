import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from '../../shared/store.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})

export class LayoutComponent implements OnInit {

  constructor(
    private store: StoreService,
    private router: Router
  ) { }

  ngOnInit() {
    const ticket = this.store.get('ticket');
    if (ticket) {
      console.log('logged!');
      this.router.navigate(['/device-rro']);
    } else {
      console.log('not logged!');
      this.router.navigate(['/authentication']);
    }
  }

}
