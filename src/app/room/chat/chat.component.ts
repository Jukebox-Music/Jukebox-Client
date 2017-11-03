import { Component, OnInit } from '@angular/core';

import { SocketService } from '../../socket.service';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
    public chatLog: string[];
    public chat$;

    constructor(private socketService: SocketService) {
        this.chatLog = [];
        this.chat$ = this.socketService.Socket$
            .ofType<ChatMessage>('chat-response')
            .do((m) => console.log);
    }

    public ngOnInit(): void {

    }

    public submit(text: string): void {
        this.socketService.Socket.emit('chat-request', text);
    }
}
