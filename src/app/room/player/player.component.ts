import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../../environments/environment';

@Component({
    selector: 'app-player',
    templateUrl: './player.component.html',
    styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit {
    @Output() public event = new EventEmitter<PlayerEvent>();
    private audio: HTMLAudioElement;
    private currentSongId: string;

    constructor() {
        Observable
        .interval(50)
        .do(() => {
            if (this.audio) {
                console.log(this.audio.currentTime);
            }
        })
        .take(3);
    }

    public ngOnInit(): void {
    }

    public play(): void {
        console.log('playing');
        this.event.emit({
            type: 'play',
            seek: this.audio.currentTime,
            state: 'play',
        });
    }

    public pause(): void {
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
            state: this.audio.paused ? 'pause' : 'play',
        });
    }

    public set PlayState(state: PlayState) {
        if (!this.audio) {
            return;
        }

        switch (state) {
            case 'play':
                this.audio.play();
                break;
            case 'pause':
                this.audio.pause();
                break;
        }
    }

    public set Song(song: Song) {
        if (!song) {
            this.audio = undefined;
            return;
        }

        if (this.currentSongId !== song.id) {
            this.currentSongId = song.id;
            console.log('creating new audio');
            this.audio = new Audio(`${environment.server.url}/song?id=${song.id}`);
        }

        this.audio.currentTime = song.seek;
    }

    public get SeekPercentage(): number {
        if (!this.audio) {
            return 0;
        }
        return this.audio.currentTime / this.audio.duration * 100;
    }
}
