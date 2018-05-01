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
    public rooms$: Observable<SocketRoom[]>;

    constructor(socketService: SocketService) {
        this.rooms$ = socketService.Socket$
            .ofType<{ [key: string]: SocketRoom }>('rooms')
            .map((rooms) => _.values(rooms));
    }

    public ngOnInit(): void {
    }

}
