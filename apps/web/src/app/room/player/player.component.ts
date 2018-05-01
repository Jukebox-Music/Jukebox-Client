import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../../environments/environment';

@Component({
    selector: 'app-player',
    templateUrl: './player.component.html',
    styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit, OnDestroy {
    @Output() public event = new EventEmitter<PlayerEvent>();
    private audio: HTMLAudioElement;
    private currentSongId: string;

    constructor() {
        this.audio = new Audio();
    }

    public ngOnInit(): void {
    }

    public ngOnDestroy(): void {
        this.audio.pause();
        this.audio.src = '';
    }

    public play(): void {
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

    public seek(percentage: number): void {
        this.event.emit({
            type: 'seek',
            seek: percentage / 100 * this.audio.duration,
            state: this.audio.paused ? 'pause' : 'play',
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

    public set Song(song: Song) {
        if (!song) {
            this.audio.src = undefined;
            return;
        }

        if (this.currentSongId !== song.id) {
            this.currentSongId = song.id;
            this.audio.src = `${environment.server.url}/song?id=${song.id}`;
        }

        this.audio.currentTime = song.seek;
    }

    public get SeekPercentage(): number {
        return this.audio.currentTime / this.audio.duration * 100;
    }

    public get IsAudioLoaded(): boolean {
        return !this.audio.src.includes('undefined');
    }
}
