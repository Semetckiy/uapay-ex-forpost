import { Component, OnInit, Input, HostListener, ChangeDetectionStrategy } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-amadeus-direct-iframe',
  templateUrl: './amadeus-direct-iframe.component.html',
  styleUrls: ['./amadeus-direct-iframe.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AmadeusDirectIframeComponent implements OnInit {

  @Input()
  targetSource:string;

  @Input()
  iframe_id:string;

  santitizedUrl:string;

  constructor(private santitizer: DomSanitizer) { 
    
  }

  ngOnInit() {
    
  }

  

  getSanitizedUrl(){
    let safeUrl:SafeResourceUrl= this.santitizer.bypassSecurityTrustResourceUrl(this.targetSource);
    return safeUrl;
  }

}
