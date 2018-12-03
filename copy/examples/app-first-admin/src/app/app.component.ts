import { Component } from '@angular/core';
import {PageLayoutService} from "@uxdf/p-components";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  displayAlert = true;

  constructor(private pageService: PageLayoutService){

  }

  closeAlert(e) {
    this.displayAlert = false;
  }
}
