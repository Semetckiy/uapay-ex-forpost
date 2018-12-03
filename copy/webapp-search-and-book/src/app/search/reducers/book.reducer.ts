// TODO (BOOKING REFACTOR) add reducer

import {BookActionTypes, BookActions} from '../actions/book.actions';
import {ResultsItem} from '../models/results-item.model';


export type Step = 'results' | 'form' | 'pnr';

export interface State {
  step: Step;
  searchResult: ResultsItem | null;
  bookData: any;
  loading: boolean;
  pnr: any;
}

export const initialState: State = {
  step: 'results',
  searchResult: null,
  bookData: null,
  loading: false,
  pnr: null,
};

export function reducer(
  state = initialState,
  action: BookActions
): State {
  switch (action.type) {

    case BookActionTypes.UpdateStep: {
      return { ...state, step: action.payload };
    }

    case BookActionTypes.SelectResultItem: {
      return { ...state, loading: true, searchResult: action.payload.searchResult, bookData: action.payload.book};
    }

    case BookActionTypes.ReceiveFarePricing: {
      return { ...state, step: 'form', loading: false};
    }

    case BookActionTypes.BackToResults: {
      return { ...state, step: 'results', searchResult: null, bookData: null, loading: false, pnr: null};
    }

    case BookActionTypes.ReceiveCommitPNR: {
      return { ...state, step: 'pnr', loading: false, pnr: action.payload};
    }


    default: {
      return state;
    }
  }
}
