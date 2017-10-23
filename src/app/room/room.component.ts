import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-room',
    templateUrl: './room.component.html',
    styleUrls: ['./room.component.scss'],
})
export class RoomComponent implements OnInit {

    private roomName$: Observable<string>;

    constructor(route: ActivatedRoute) {
        this.roomName$ = route.queryParams.map((params) => {
            return params.name;
        });
    }

    public ngOnInit(): void {
    }

}
