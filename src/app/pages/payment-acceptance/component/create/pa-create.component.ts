import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pa-create',
  templateUrl: './pa-create.component.html',
  styleUrls: ['./pa-create.component.css']
})

export class PaCreateComponent implements OnInit {

  constructor(
    private router: Router
  ) {}

  ngOnInit() {}

  test() {

  }

}
