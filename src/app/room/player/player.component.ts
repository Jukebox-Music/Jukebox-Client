import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-player',
    templateUrl: './player.component.html',
    styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements AfterViewInit {

    constructor() { }

    public ngAfterViewInit(): void {
        this.initPlayer();
    }

    private initPlayer(): void {
        const player = document.getElementById('player');
        player.addEventListener('seeked', () => {
            console.log('seek');
        }, true);
        player.addEventListener('play', () => {
            console.log('play');
        }, true);
    }
}
