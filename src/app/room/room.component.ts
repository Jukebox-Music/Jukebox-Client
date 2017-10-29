import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../environments/environment';
import { SocketService } from '../socket.service';

@Component({
    selector: 'app-room',
    templateUrl: './room.component.html',
    styleUrls: ['./room.component.scss'],
})
export class RoomComponent implements OnInit {
    public roomName$: Observable<string>;
    private room$: Observable<SocketMessage<Room>>;
    private serverUrl = environment.server.url;

    constructor(route: ActivatedRoute, private socketService: SocketService) {
        this.roomName$ = route.queryParams.map((params) => {
            return params.name;
        });

        this.room$ = socketService.Socket$
            .filter((message) => message.type === 'room')
            .map((message) => message.payload);
    }

    public ngOnInit(): void {
        this.roomName$.subscribe((name) => {
            this.socketService.Socket.emit('join', name);
        });
    }
}
