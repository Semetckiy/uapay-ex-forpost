import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  PerfectScrollbarConfigInterface,
  PerfectScrollbarComponent,
  PerfectScrollbarDirective
} from 'ngx-perfect-scrollbar';
import { StoreService } from '../../shared/store.service';

@Component({
  selector: 'app-device-rro',
  templateUrl: './device-rro.component.html',
  styleUrls: ['./device-rro.component.css']
})

export class DeviceRroComponent implements OnInit {

  selectedTab = 'item_1';

  public config: PerfectScrollbarConfigInterface = {};

  constructor(
    private store: StoreService,
    private router: Router
  ) {}

  ngOnInit() {}

  test() {
    this.store.set('ticket', null);
    this.router.navigate(['/authentication']);
  }

  selectTab(tab) {
    this.selectedTab = tab;
  }

}
