import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-row',
    templateUrl: './row.component.html',
    styleUrls: ['./row.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RowComponent implements OnInit {

    constructor() { }

    public ngOnInit(): void {
    }

}
