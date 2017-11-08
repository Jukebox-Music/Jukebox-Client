import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    @ViewChild(PlayerComponent) public player: PlayerComponent;

    constructor(route: ActivatedRoute, private socketService: SocketService, private router: Router) {
        this.roomName$ = route.queryParams.map((params) => {
            return params.name;
        });

        this.room$ = socketService.Socket$
            .ofType<SocketRoom>('room')
            .do((room) => {
                setTimeout(() => {
                    this.player.PlayState = room.room.playState;

                    if (!room.room.songs[0]) {
                        this.player.Song = undefined;
                    } else {
                        this.player.Song = room.room.songs[0];
                    }
                }, 100);
            });
    }

    public ngOnInit(): void {
        this.roomName$.do((name) => {
            if (!name) {
                this.router.navigate(['/']);
                return;
            }
            this.socketService.Socket.emit('join', name);
        }).subscribe();
    }

    public playerEvent(e: PlayerEvent): void {
        console.log(e);
        this.socketService.Socket.emit('song-state', {
            type: e.state,
            seek: e.seek,
        } as SongState);
    }
}
