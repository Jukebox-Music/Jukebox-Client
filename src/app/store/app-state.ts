import { RoomModel } from './room';
import { UserModel } from './user';

export interface AppState {
    user: UserModel;
    room: RoomModel;
}
