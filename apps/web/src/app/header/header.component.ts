import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppState } from '../store';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
    public name$: Observable<string>;

    constructor(store: Store<AppState>) {
        this.name$ = store.select('user').map((user) => {
            return user.name;
        });
     }

    public ngOnInit(): void {
    }

}
