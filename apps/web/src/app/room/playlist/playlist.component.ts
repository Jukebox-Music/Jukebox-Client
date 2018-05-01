import { Component, Input, OnInit } from '@angular/core';
import { SortablejsOptions } from 'angular-sortablejs';

import { SocketService } from '../../socket.service';
@Component({
    selector: 'app-playlist',
    templateUrl: './playlist.component.html',
    styleUrls: ['./playlist.component.scss'],
})
export class PlaylistComponent implements OnInit {
    @Input() public room: Room;
    public options: SortablejsOptions;
    public isPlaylist: boolean;

    constructor(socketService: SocketService) {
        this.options = {
            onUpdate: (event: any) => {
                socketService.Socket.emit('song-order', {
                    oldIndex: event.oldIndex,
                    newIndex: event.newIndex,
                });
                console.log(event);
            },
            animation: 150,
        };

        this.isPlaylist = true;
    }

    public ngOnInit(): void {
    }

}
