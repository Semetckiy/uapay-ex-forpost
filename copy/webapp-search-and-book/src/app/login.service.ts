import { Injectable, NgZone } from '@angular/core';
import { Store } from '@ngrx/store';
import { HttpService } from '@seco/core';
import { UpdateClpConfig, UserLoggedIn } from './core.actions';
import { ClpLoginResponse } from '@seco/login/src/app/login.config';

@Injectable()
export class LoginService {
  private readonly BUID_CONFIG_TOKEN = 'buildConfigTokenAction';
  private readonly SIGN_IN_ACTION = 'UMSignInByAccessToken';

  constructor(private zone: NgZone, private store: Store<any>, private httpService: HttpService) {}

  /**
   * Get token and nonce by calling UM action.
   */
  getClpConfig() {
    this.httpService.postDac(this.BUID_CONFIG_TOKEN, {}).subscribe((res: any) => {
      this.store.dispatch(new UpdateClpConfig({
        token: res.success.configToken,
        nonce: res.success.nonce
      }));
    });
  }

   /**
   * Login by access token
   */
  loginByAccessToken(clpLoginResponse: ClpLoginResponse) {
    const loginData = {
      ACCESS_TOKEN: clpLoginResponse.accessToken,
      ID_TOKEN: clpLoginResponse.idToken,
      NONCE: clpLoginResponse.nonce
    };

    this.httpService.postDac(this.SIGN_IN_ACTION, loginData).subscribe((res: any) => {
      // have to call inside zonejs to trigger change detection, CLP code is run by default outside zonejs
      this.zone.run(() => {
        this.httpService.config.jSessionId = res.JsessionId;
        this.store.dispatch(new UserLoggedIn());
      });
    });
  }
}
