import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from './store';
import { AddNameAction } from './store/user';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    constructor(store: Store<AppState>) {
        store.dispatch(new AddNameAction(localStorage.getItem('user.name')));
    }
}
