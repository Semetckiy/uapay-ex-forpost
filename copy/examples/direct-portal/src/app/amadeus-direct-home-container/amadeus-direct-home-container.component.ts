import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {Router} from "@angular/router";
import { IframeService } from '../services/iframe.service';
import {Init} from "@uxdf/search-and-book/src/app/search/actions/results.actions";

@Component({
  selector: 'app-amadeus-direct-home-container',
  templateUrl: './amadeus-direct-home-container.component.html',
  styleUrls: ['./amadeus-direct-home-container.component.scss']
})
export class AmadeusDirectHomeContainerComponent implements OnInit {
  loginUserName:string="Welcome Gustav";

  constructor(private store: Store<any>,
    private router: Router,
    private iframeService:IframeService) { }

    ngOnInit() {
      this.iframeService.listenToMessageEventAndOpen();
  }
  
  
  ngOnDestroy(){
    this.iframeService.removeMessageEventListener();
  }

  search(data) {
    this.router.navigate(['search']).then(() => {
      this.store.dispatch(new Init({searchParams: data}));
    });
  }

}
