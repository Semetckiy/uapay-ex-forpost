import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from '../../shared/store.service';

@Component({
  selector: 'app-device-rro',
  templateUrl: './device-rro.component.html',
  styleUrls: ['./device-rro.component.css']
})

export class DeviceRroComponent implements OnInit {

  constructor(
    private store: StoreService,
    private router: Router
  ) {}

  ngOnInit() {}

  test() {
    this.store.set('ticket', null);
    this.router.navigate(['/authentication']);
  }

}
