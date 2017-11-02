import { Injectable } from '@angular/core';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

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
        .map(toPayload)
        .flatMap((payload) => {
            console.log(payload);
            return Observable.empty();
        });
    constructor(private actions$: Actions) {
    }
}
