import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import * as fromFormActions from '../actions/form.actions';
import {catchError, map, switchMap} from "rxjs/operators";
import {of} from "rxjs";

@Injectable()
export class FormEffects {

  constructor(private actions$: Actions) {
  }
}
