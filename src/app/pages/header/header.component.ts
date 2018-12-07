import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  lang = 'Item 1';

  constructor() {}

  ngOnInit() {}

  setLang(_lang) {
    this.lang = _lang;
  }

}
