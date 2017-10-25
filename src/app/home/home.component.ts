import { Component, OnInit } from '@angular/core';

import { SocketService } from '../socket.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

    constructor(socketService: SocketService) { }

    public ngOnInit(): void {
    }

}
