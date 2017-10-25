import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { SocketService } from '../socket.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    public rooms$: Observable<SocketMessage<Room>>;

    constructor(socketService: SocketService) {
        this.rooms$ = socketService.Socket$
            .filter((message) => message.type === 'rooms')
            .map((message) => message.payload);
    }

    public ngOnInit(): void {
    }

}
