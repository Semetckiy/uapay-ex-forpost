import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-amadeus-direct-modal',
  templateUrl: './amadeus-direct-modal.component.html',
  styleUrls: ['./amadeus-direct-modal.component.scss']
})
export class AmadeusDirectModalComponent implements OnInit {

  someText:string;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
    
  }
  ngAfterViewInit(){
    (<HTMLInputElement>document.getElementById('modalBody')).value="hello there";
  }
  closeButtonAction(){
    this.activeModal.close('Close click');
  }

}
