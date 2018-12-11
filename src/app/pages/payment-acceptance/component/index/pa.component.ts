import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pa',
  templateUrl: './pa.component.html',
  styleUrls: ['./pa.component.css']
})

export class PaComponent implements OnInit {

  constructor(
    private router: Router
  ) {}

  ngOnInit() {}

  test() {

  }

}
