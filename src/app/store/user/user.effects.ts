import { Injectable } from '@angular/core';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { SocketService } from '../../socket.service';
import { AppState } from '../app-state';
import * as UserActions from './user.actions';

@Injectable()
export class UserEffects {
    @Effect() public addUserData$: Observable<any> = this.actions$.ofType(UserActions.ADD_DATA)
        .map(toPayload)
        .flatMap((payload) => {
            console.log(payload);
            return Observable.empty();
        });

    @Effect() public addUserName$: Observable<any> = this.actions$.ofType(UserActions.ADD_NAME)
        .withLatestFrom(this.store$.select(state => state.user))
        .map(([action, user]) => {
            return user;
        })
        .flatMap((payload) => {
            console.log(payload);
            localStorage.setItem('user.name', payload.name);
            this.socketService.Socket.emit('set-user', payload);
            return Observable.empty();
        });

    constructor(private actions$: Actions, private store$: Store<AppState>, private socketService: SocketService) {
    }
}
