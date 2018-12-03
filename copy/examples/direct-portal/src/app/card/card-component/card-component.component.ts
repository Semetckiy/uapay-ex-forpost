import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.scss']
})
export class CardComponentComponent implements OnInit {

  @Input()
  taskLink:string;

  @Input()
  navigationLink;

  @Input()
  tileHeading:string;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  navigate(){
    this.router.navigate([this.navigationLink]);
  }

}
