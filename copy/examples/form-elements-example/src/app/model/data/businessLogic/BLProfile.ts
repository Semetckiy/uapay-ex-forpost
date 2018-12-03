import { Profile } from "../beans/Profile";
import { EntityDefaultBusinessLogic, EntityBusinessLogic } from "@uxdf/ioc-model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BLProfile extends EntityDefaultBusinessLogic<Profile> {

  constructor(private http: HttpClient) {
    super();
  }

  extends(): this {
    return this;
  }

  check() {
    let error: boolean = false;
    return error;
  }

  onUpdate(profile: Profile): boolean {

    console.log('profile onUpdate', profile);

    // this.http.put('/api/profile', {
    //   name: user.name.value,
    //   email: user.email.value
    // }).subscribe(x => console.log('PUT /api/profile:', x));

    return EntityBusinessLogic.OK;
  }

}
