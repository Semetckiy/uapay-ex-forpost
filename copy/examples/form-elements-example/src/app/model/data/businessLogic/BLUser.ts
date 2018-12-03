import {User} from "../beans/User";
import {EntityDefaultBusinessLogic, EntityBusinessLogic} from "@uxdf/ioc-model";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BLUser extends EntityDefaultBusinessLogic<User> {

  constructor(private http: HttpClient) {
    super();
  }

  extends(): this {
    return this;
  }

  check() {
    let error: boolean = false;
    // Do some business logic
    return error;
  }

  onUpdate(user: User): boolean {
    console.log('onUpdate', user, user.email.value);
    this.http.put('/api/profile', {
      // TODO Beans as plain objects + ER graph separate object
      // TODO user.name.value is redundant, just user.name
      name: user.name.value,
      email: user.email.value
    }).subscribe(x => console.log('PUT /api/profile:', x));
    return EntityBusinessLogic.OK;
  }

  postUpdate(entityObject: User): boolean {
    console.log('postUpdate');
    return EntityBusinessLogic.OK;
  }
}
