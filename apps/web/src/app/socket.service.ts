import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';
import * as io from 'socket.io-client';

import { environment } from '../environments/environment';

class SocketObservable extends Observable<SocketMessage> {
    public ofType<T>(type: string): Observable<T> {
        return this.filter((message) => message.type === type)
            .map((message) => message.payload as T);
    }
}

@Injectable()
export class SocketService {
    private socket$: SocketObservable;
    private socket: SocketIOClient.Socket;

    constructor() {
        this.socket = io(`${environment.server.url}`);

        this.socket$ = new SocketObservable(observer => {
            this.addSocketEventListener<{ [key: string]: SocketRoom }>('rooms', observer);
            this.addSocketEventListener<SocketRoom>('room', observer);
            this.addSocketEventListener<ChatMessage>('chat-response', observer);
        });
    }

    private addSocketEventListener<T>(name: string, observer: Subscriber<SocketMessage<T>>): void {
        this.socket.on(name, (data) => {
            observer.next({
                type: name,
                payload: data as T,
            });
        });
    }

    public get Socket$(): SocketObservable {
        return this.socket$;
    }

    public get Socket(): SocketIOClient.Socket {
        return this.socket;
    }
}
