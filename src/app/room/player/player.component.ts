import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

import { environment } from '../../../environments/environment';

interface PlayerEvent {
    type: string;
    payload?: any;
}

@Component({
    selector: 'app-player',
    templateUrl: './player.component.html',
    styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit {
    private serverUrl = environment.server.url;
    @ViewChild('player') public player: ElementRef;
    @Output() event = new EventEmitter<PlayerEvent>();

    constructor() { }

    public ngOnInit(): void {
        this.initPlayer();
    }

    private initPlayer(): void {
        this.player.nativeElement.addEventListener('seeked', (e) => {
            this.event.emit({
                type: 'seeked',
                payload: e.srcElement.currentTime,
            });
        }, true);
        this.player.nativeElement.addEventListener('play', () => {
            this.event.emit({
                type: 'play',
            });
        }, true);
        this.player.nativeElement.addEventListener('pause', () => {
            this.event.emit({
                type: 'pause',
            });
        }, true);
    }
}
