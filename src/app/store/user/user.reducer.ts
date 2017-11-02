import * as UserActions from './user.actions';
import { UserModel } from './user.model';

export function userReducer(state: UserModel = { name: 'un-named' }, action: UserActions.Actions): UserModel {
    switch (action.type) {
        case UserActions.ADD_DATA:
            return action.payload;
        case UserActions.ADD_NAME:
            state.name = action.payload;
            return state;
        default:
            return state;
    }
}
