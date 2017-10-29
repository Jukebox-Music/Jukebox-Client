import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { environment } from '../../../environments/environment';

@Component({
    selector: 'app-player',
    templateUrl: './player.component.html',
    styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit {
    private serverUrl = environment.server.url;
    @ViewChild('player') public player: ElementRef;

    constructor() { }

    public ngOnInit(): void {
        this.initPlayer();
    }

    private initPlayer(): void {
        this.player.nativeElement.addEventListener('seeked', (e) => {
            console.log(e.srcElement.currentTime);
        }, true);
        this.player.nativeElement.addEventListener('play', () => {
            console.log('play');
        }, true);
        this.player.nativeElement.addEventListener('pause', () => {
            console.log('pause');
        }, true);
    }
}
