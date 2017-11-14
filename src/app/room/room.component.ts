import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { SocketService } from '../socket.service';
import { AppState } from '../store/app-state';
import { PlayerComponent } from './player/player.component';
import { RoomService } from './room.service';

@Component({
    selector: 'app-room',
    templateUrl: './room.component.html',
    styleUrls: ['./room.component.scss'],
})
export class RoomComponent implements OnInit, OnDestroy {
    private roomName$: Observable<string>;
    public room$: Observable<Room>;
    @ViewChild(PlayerComponent) public player: PlayerComponent;

    // tslint:disable-next-line:max-line-length
    constructor(route: ActivatedRoute, private socketService: SocketService, private router: Router, store: Store<AppState>, roomService: RoomService) {
        this.roomName$ = route.queryParams.map((params) => {
            return params.name;
        });

        this.room$ = store.select('room')
            .do((room) => {
                setTimeout(() => {
                    if (!room.songs[0]) {
                        this.player.Song = undefined;
                    } else {
                        this.player.Song = room.songs[0];
                    }

                    this.player.PlayState = room.playState;
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

    public ngOnDestroy(): void {
        this.socketService.Socket.emit('leave');
        console.log('leaving');
    }

    public playerEvent(e: PlayerEvent): void {
        console.log(e);
        this.socketService.Socket.emit('song-state', {
            type: e.state,
            seek: e.seek,
        } as SongState);
    }
}
