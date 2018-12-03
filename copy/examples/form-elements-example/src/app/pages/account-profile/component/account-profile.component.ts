import { Component, OnInit } from '@angular/core';
import { EntityObject } from "@uxdf/ioc-model";
import { EngineService } from "@uxdf/ioc-engine";

@Component({
  selector: 'app-page-account',
  templateUrl: './account-profile.component.html',
  styleUrls: ['./account-profile.component.css']
})
export class AccountProfileComponent implements OnInit {

  profile: EntityObject;

  title = 'My Account';
  description = 'You can find here all information related to your account';

  constructor(
    private engine: EngineService
  ) { }

  ngOnInit() {
    this.loadProfile();
  }

  loadProfile() {
    this.engine.pageService().loadMapper('GET_USER_PROFILE').subscribe(profile => {
      this.profile = profile;
    });
  }

}
