import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  isToggled: boolean=true;

  constructor() { }

  ngOnInit() {
  }

  toggleFooter(){
    // TODO check if we need to add toggle functionality to p-footer
    this.isToggled=!this.isToggled;
  }

}
