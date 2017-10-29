import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

import { environment } from '../../../environments/environment';

@Component({
    selector: 'app-player',
    templateUrl: './player.component.html',
    styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit {
    private serverUrl = environment.server.url;
    @ViewChild('player') public player: ElementRef;
    @Output() public event = new EventEmitter<PlayerEvent>();

    constructor() { }

    public ngOnInit(): void {
        this.initPlayer();
    }

    private initPlayer(): void {
        this.player.nativeElement.addEventListener('seeked', (e) => {
            this.event.emit({
                type: 'seek',
                seek: e.srcElement.currentTime,
                state: 'pause',
            });
        }, true);
        this.player.nativeElement.addEventListener('play', (e) => {
            this.event.emit({
                type: 'play',
                seek: e.srcElement.currentTime,
                state: 'play',
            });
        }, true);
        this.player.nativeElement.addEventListener('pause', (e) => {
            this.event.emit({
                type: 'pause',
                seek: e.srcElement.currentTime,
                state: 'pause',
            });
        }, true);
    }
}
