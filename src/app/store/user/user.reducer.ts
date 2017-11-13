import * as UserActions from './user.actions';
import { UserModel } from './user.model';

const defaultName = localStorage.getItem('user.name') || 'Un-named';

export function userReducer(state: UserModel = { name: defaultName }, action: UserActions.Actions): UserModel {
    switch (action.type) {
        case UserActions.ADD_DATA:
            return action.payload;
        case UserActions.ADD_NAME:
            const name = !!action.payload ? action.payload : defaultName;
            const newState = {
                ...state,
                name: name,
            };
            return newState;
        default:
            return state;
    }
}
