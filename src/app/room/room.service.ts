import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { SocketService } from '../socket.service';
import { AppState } from '../store';
import { AddDataAction, RoomModel } from '../store/room';

@Injectable()
export class RoomService {

    constructor(socketService: SocketService, store: Store<AppState>) {
        console.log('stuff');
        socketService.Socket$
            .ofType<Room>('room')
            .do((room) => {
                store.dispatch(new AddDataAction(room));
            });
    }

}
