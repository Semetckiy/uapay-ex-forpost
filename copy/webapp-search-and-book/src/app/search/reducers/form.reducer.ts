import {FormActionTypes, FormActions} from '../actions/form.actions';
import {SearchType} from "../models/search-params.model";

export interface Destination {

}

export interface Date {

}

export interface PTC {

}

export interface Airline {

}


export interface Fields {
  searchType: SearchType;
  nonStop?: boolean;
  inboundTo?: Destination;
  outboundFrom?: Destination;
  date?: Date;
  returnDate?: Date;
  ptcs?: PTC[];
  airline?: Airline[];
  cabin?: string;
}

export interface State {

  fields: Fields;

}

export const selectFields = state => state.fields;

export const initialState: State = {
  fields: {
    searchType: SearchType.OneWayTrip
  }
};

export function reducer(
  state = initialState,
  action: FormActions
): State {
  switch (action.type) {

    case FormActionTypes.UpdateFields: {
      return { ...state, fields: action.payload.fields }
    }

    default: {
      return state;
    }
  }
}