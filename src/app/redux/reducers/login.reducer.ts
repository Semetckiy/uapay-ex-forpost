import { LoginActionTypes, LoginActions } from '../actions/login.actions';
import { Fields } from '../models/login.model';

export interface State {
  fields: Fields;
}

function getInitialState(): State {
  return {
    fields: {
      userName: '',
      password: ''
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
