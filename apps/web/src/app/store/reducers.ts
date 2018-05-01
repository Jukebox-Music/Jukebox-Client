import { ActionReducerMap } from '@ngrx/store';

import { AppState } from './app-state';
import { roomReducer } from './room';
import { userReducer } from './user';

export const REDUCERS: ActionReducerMap<AppState> = {
    user: userReducer,
    room: roomReducer,
};
