import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

import { environment } from '../../environments/environment';

@Component({
    selector: 'app-room',
    templateUrl: './room.component.html',
    styleUrls: ['./room.component.scss'],
})
export class RoomComponent implements OnInit {

    public roomName$: Observable<string>;

    constructor(route: ActivatedRoute) {
        this.roomName$ = route.queryParams.map((params) => {
            return params.name;
        });
    }

    public ngOnInit(): void {
        this.roomName$.subscribe((name) => {
            const socket = io(`${environment.server.url}`);
            socket.emit('join', name);
        });
    }

}
