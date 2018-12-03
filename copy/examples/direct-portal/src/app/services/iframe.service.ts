import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IframeService {

  constructor() { }

  listenToMessageEventAndOpen(){
    window.addEventListener('message',this.openUrl,false);
  }

  removeMessageEventListener(){
    window.removeEventListener('message',this.openUrl);
  }

  private openUrl(event){
    console.log(event);
    if(event.data.target){
      window.open(event.data.target);
     }
  }
}
