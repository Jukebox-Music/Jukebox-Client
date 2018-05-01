import { Component, OnInit } from '@angular/core';
import { hri } from 'human-readable-ids';

@Component({
    selector: 'app-new-room',
    templateUrl: './new-room.component.html',
    styleUrls: ['./new-room.component.scss'],
})
export class NewRoomComponent implements OnInit {
    public roomName: string;
    public randomId: string;

    constructor() {
        this.roomName = hri.random();
    }

    public ngOnInit(): void {
    }

}
