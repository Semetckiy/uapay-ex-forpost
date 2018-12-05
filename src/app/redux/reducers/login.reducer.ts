import { LoginActionTypes, LoginActions } from '../actions/login.actions';
import { Fields as LoginFields } from '../models/login-fields.model';
import { Fields as LoginResult } from '../models/login-results.model';

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
      value: ''
    }
  };
}

const initialState: State = getInitialState();

export function reducer(state = initialState, action: LoginActions): State {
  switch (action.type) {

    case LoginActionTypes.Init: {
      return { ...getInitialState(), fields: action.payload };
    }

    case LoginActionTypes.UpdateFields: {
      return {...state, fields: action.payload};
    }

    default: {
      return state;
    }
  }
}
