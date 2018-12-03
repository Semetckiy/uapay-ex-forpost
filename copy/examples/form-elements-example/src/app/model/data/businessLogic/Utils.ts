import { HttpParams } from "@angular/common/http";

export class Utils {

  constructor() { }

  public setParams (filters: object) {

    let httpParams = new HttpParams();

    Object.keys(filters).forEach(function (key) {
      httpParams = httpParams.append(key, filters[key]);
    });

    return httpParams;

  }

}
