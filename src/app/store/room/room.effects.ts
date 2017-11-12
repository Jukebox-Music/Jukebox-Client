import { Injectable } from '@angular/core';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { SocketService } from '../../socket.service';
import { AppState } from '../app-state';
import * as UserActions from './room.actions';

@Injectable()
export class RoomEffects {
    @Effect() public addUserData$: Observable<any> = this.actions$.ofType(UserActions.ADD_DATA)
        .map(toPayload)
        .flatMap((payload) => {
            console.log(payload);
            return Observable.empty();
        });

    @Effect() public addSong$: Observable<any> = this.actions$.ofType(UserActions.ADD_SONG)
        .withLatestFrom(this.store$.select(state => state.room))
        .map(([action, room]) => {
            return room;
        })
        .flatMap((payload) => {
            console.log(payload);
            // this.socketService.Socket.emit('set-user', payload);
            return Observable.empty();
        });

    constructor(private actions$: Actions, private store$: Store<AppState>, private socketService: SocketService) {
    }
}
