import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'lib-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit {

  @Input() value: string | number;
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
