import * as RoomActions from './room.actions';
import { RoomModel } from './room.model';

const defaultName = 'Un-named';

export function roomReducer(state: RoomModel = { name: defaultName }, action: RoomActions.Actions): RoomModel {
    switch (action.type) {
        case RoomActions.ADD_DATA:
            return action.payload;
        case RoomActions.ADD_SONG:
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
