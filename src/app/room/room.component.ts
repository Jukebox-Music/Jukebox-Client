import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { SocketService } from '../socket.service';
import { PlayerComponent } from './player/player.component';

@Component({
    selector: 'app-room',
    templateUrl: './room.component.html',
    styleUrls: ['./room.component.scss'],
})
export class RoomComponent implements OnInit {
    private roomName$: Observable<string>;
    public room$: Observable<SocketRoom>;
    @ViewChild('player') public player: PlayerComponent;

    constructor(route: ActivatedRoute, private socketService: SocketService) {
        this.roomName$ = route.queryParams.map((params) => {
            return params.name;
        });

        this.room$ = socketService.Socket$
            .filter((message) => message.type === 'room')
            .map((message) => message.payload as SocketRoom)
            .do((room) => {
                if (!this.player) {
                    return;
                }

                if (!room.room.songs[0]) {
                    return;
                }

                this.player.PlayState = room.room.playState;
                this.player.Seek = room.room.songs[0].seek;
            });
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
