import { ActionReducerMap, ActionReducer, MetaReducer } from '@ngrx/store';
import { storeLogger } from 'ngrx-store-logger';


export function logger(reducer: ActionReducer<any>): any {
  return storeLogger()(reducer);
}

export const reducers: ActionReducerMap<any> = {};

export const metaReducers: MetaReducer<any>[] = [logger];
