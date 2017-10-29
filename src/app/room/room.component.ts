import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { SocketService } from '../socket.service';

@Component({
    selector: 'app-room',
    templateUrl: './room.component.html',
    styleUrls: ['./room.component.scss'],
})
export class RoomComponent implements OnInit {
    private roomName$: Observable<string>;
    public room$: Observable<SocketMessage<Room>>;

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

    public playerEvent(e: PlayerEvent): void {
        console.log(e);
        this.socketService.Socket.emit('song-state', {
            type: e.state,
            seek: e.seek,
        } as SongState);
    }
}
