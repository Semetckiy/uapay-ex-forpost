import {Action} from '@ngrx/store';
import {Fields,} from "../reducers/form.reducer";

export enum FormActionTypes {
  UpdateFields = '[Search form] Update fields',
  Submit = '[Search form] Submit'
}

export class Submit implements Action {
  readonly type = FormActionTypes.Submit;

  constructor(public payload: { params: any }) {
  }
}

export class UpdateFields implements Action {
  readonly type = FormActionTypes.UpdateFields;

  constructor(public payload: { fields: Fields }) {
  }
}

export type FormActions = Submit | UpdateFields;
