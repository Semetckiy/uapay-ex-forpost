import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from '../../shared/store.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  lang = 'Item 1';

  constructor(
    private store: StoreService,
    private router: Router
  ) {}

  ngOnInit() {}

  setLang(_lang) {
    this.lang = _lang;
  }

  login() {
    this.store.set('ticket', null);
    this.router.navigate(['/authentication']);
  }

}
