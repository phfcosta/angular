import { Person } from '../person';
import * as fromPersonReducer from './person.reducer';
import { ActionReducerMap, createSelector } from '@ngrx/store';

export interface AppState {
    people: fromPersonReducer.PeopleState;
}

export const appReducers: ActionReducerMap<AppState> = {
    people: fromPersonReducer.reducer
}

