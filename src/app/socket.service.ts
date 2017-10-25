import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

import { environment } from '../environments/environment';

@Injectable()
export class SocketService {
    private socket: SocketIOClient.Socket;

    constructor() {
        this.socket = io(`${environment.server.url}`);
    }

    public get Socket(): SocketIOClient.Socket {
        return this.socket;
    }
}
