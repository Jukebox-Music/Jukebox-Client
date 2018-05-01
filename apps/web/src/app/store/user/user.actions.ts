import { Action } from '@ngrx/store';

import { UserModel } from './user.model';

export const ADD_DATA = '[User] ADD_DATA';
export const ADD_NAME = '[User] ADD_NAME';

export class AddDataAction implements Action {
    public readonly type = ADD_DATA;

    constructor(public payload: UserModel) {
    }
}

export class AddNameAction implements Action {
    public readonly type = ADD_NAME;

    constructor(public payload: string) {
    }
}

export type Actions = AddDataAction | AddNameAction;
