import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

import { environment } from '../../../environments/environment';

@Component({
    selector: 'app-player',
    templateUrl: './player.component.html',
    styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit {
    @Output() public event = new EventEmitter<PlayerEvent>();
    private audio: HTMLAudioElement;
    public seekPercentage = 50.454;

    constructor() { }

    public ngOnInit(): void {
        // this.initPlayer();
        this.audio = new Audio(`${environment.server.url}/song/test`);
    }

    public play(): void {
        console.log('playing');
        this.audio.play();
        this.event.emit({
            type: 'play',
            seek: this.audio.currentTime,
            state: 'play',
        });
    }

    public pause(): void {
        this.audio.pause();
        this.event.emit({
            type: 'pause',
            seek: this.audio.currentTime,
            state: 'pause',
        });
    }

    public seek(): void {
        this.event.emit({
            type: 'seek',
            seek: this.audio.currentTime,
            state: 'pause',
        });
    }

    public set PlayState(state: PlayState) {
        switch (state) {
            case 'play':
                this.audio.play();
                break;
            case 'pause':
                this.audio.pause();
                break;
        }
    }

    public set Seek(seek: number) {
        this.audio.currentTime = seek;
    }
}
