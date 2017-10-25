import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { Observable } from 'rxjs/Observable';

import { SocketService } from '../socket.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    public rooms$: Observable<Room[]>;

    constructor(socketService: SocketService) {
        this.rooms$ = socketService.Socket$
            .filter((message) => message.type === 'rooms')
            .map((message) => message.payload)
            .map((rooms: { [key: string]: Room }) => {
                return _.values(_.map(rooms, (value, key) => {
                    value.name = key;
                    return value;
                }));
            });
    }

    public ngOnInit(): void {
    }

}
