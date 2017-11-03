import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as _ from 'lodash';
import { Observable } from 'rxjs/Observable';

import { SocketService } from '../socket.service';
import { AppState } from '../store/app-state';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    public rooms$: Observable<SocketRoom[]>;
    public name$: Observable<string>;

    constructor(socketService: SocketService, store: Store<AppState>) {
        this.rooms$ = socketService.Socket$
            .filter((message) => message.type === 'rooms')
            .map((message) => message.payload)
            .map((rooms: { [key: string]: SocketRoom }) => _.values(rooms));

        this.name$ = store.select('user').map((user) => {
            return user.name;
        });
    }

    public ngOnInit(): void {
    }

}
