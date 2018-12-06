import {LoginActionTypes, LoginActions } from '../actions/login.actions';
import { LoginFields } from '../models/login-fields.model';
import { LoginResult } from '../models/login-result.model';

export interface State {
  fields: LoginFields;
  ticket: LoginResult;
}

function getInitialState(): State {
  return {
    fields: {
      username: '',
      password: ''
    },
    ticket: {
      value: '',
      message: '',
      code: ''
    }
  };
}

const initialState: State = getInitialState();

export function reducer(state = initialState, action: LoginActions): State {
  switch (action.type) {

    case LoginActionTypes.Init: {
      return { ...getInitialState(), fields: action.payload };
    }

    case LoginActionTypes.UpdateLoginFields: {
      return {...state, fields: action.payload};
    }

    case LoginActionTypes.SetLoginResult: {
      return {...state, ticket: action.payload };
    }

    default: {
      return state;
    }
  }
}
