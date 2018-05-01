import { Action } from '@ngrx/store';

import { RoomModel } from './room.model';

export const ADD_DATA = '[Room] ADD_DATA';
export const ADD_SONG = '[Room] ADD_SONG';

export class AddDataAction implements Action {
    public readonly type = ADD_DATA;

    constructor(public payload: RoomModel) {
    }
}

export class AddSongAction implements Action {
    public readonly type = ADD_SONG;

    constructor(public payload: string) {
    }
}

export type Actions = AddDataAction | AddSongAction;
