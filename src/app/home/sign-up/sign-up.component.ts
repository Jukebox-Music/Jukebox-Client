import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../store';
import { AddNameAction } from '../../store/user';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {

    constructor(private store: Store<AppState>) { }

    public ngOnInit(): void {
    }

    public onChange(event: string): void {
        this.store.dispatch(new AddNameAction(event));
    }

}
