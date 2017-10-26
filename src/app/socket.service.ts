import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

import { environment } from '../environments/environment';

@Injectable()
export class SocketService {
    private socket$: Observable<SocketMessage>;
    private socket: SocketIOClient.Socket;

    constructor() {
        this.socket = io(`${environment.server.url}`);

        this.socket$ = new Observable(observer => {
            this.socket.on('rooms', (data) => {
                console.log(data);
                observer.next({
                    type: 'rooms',
                    payload: data,
                });
            });

            this.socket.on('room', (data) => {
                observer.next({
                    type: 'room',
                    payload: data,
                });
            });
        });
    }

    public get Socket$(): Observable<SocketMessage> {
        return this.socket$;
    }

    public get Socket(): SocketIOClient.Socket {
        return this.socket;
    }
}
