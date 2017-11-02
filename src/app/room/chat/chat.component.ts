import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {

    constructor() { }

    public ngOnInit(): void {
    }

    public submit(e: any): void {
        console.log(e);
    }

}
