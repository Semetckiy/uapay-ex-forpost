import {User} from "../beans/User";
import {EntityDefaultBusinessLogic, EntityBusinessLogic} from "@uxdf/ioc-model";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {EngineService} from "@uxdf/ioc-engine-rx";

@Injectable({
  providedIn: 'root'
})
export class BLUser extends EntityDefaultBusinessLogic<User> {

  constructor(private http: HttpClient, private engine: EngineService) {
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

  onUpdate(parameters): boolean {

    // TODO
    // 2. Format and send request to server
    // 3. Get and format server's response to E/R model
    // 4. Format and send response to user

    this.http.put('/api/profile', {
      name: parameters.name,
      email: parameters.email
    }).subscribe(x => {
      console.log('PUT /api/profile:', x);

      // TODO actions: 3. Get and format server's response to E/R model
      this.engine.actions.next('RELOAD');
    });

    return EntityBusinessLogic.OK;
  }

  postUpdate(entityObject: User): boolean {
    console.log('postUpdate');
    return EntityBusinessLogic.OK;
  }
}

