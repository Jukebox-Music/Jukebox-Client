import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-playlist',
    templateUrl: './playlist.component.html',
    styleUrls: ['./playlist.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaylistComponent implements OnInit {
    @Input() public room: Room;

    constructor() { }

    public ngOnInit(): void {
    }

}
