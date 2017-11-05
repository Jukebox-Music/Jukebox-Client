import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { SocketService } from '../../socket.service';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
    public chatLog: ChatMessage[];
    public text: string;
    public chat$: Observable<ChatMessage>;
    @ViewChild('chat') public chat: ElementRef;

    constructor(private socketService: SocketService) {
        this.chatLog = [];
        this.chat$ = this.socketService.Socket$
            .ofType<ChatMessage>('chat-response')
            .do((m) => {
                this.chatLog.push(m);
                console.log(this.chatLog);
            });
    }

    public ngOnInit(): void {
        this.chat$.subscribe();
    }

    public submit(text: string): void {
        this.socketService.Socket.emit('chat-request', text);
        this.text = '';
    }
}
