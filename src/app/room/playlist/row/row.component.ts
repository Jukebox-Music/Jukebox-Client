import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-row',
    templateUrl: './row.component.html',
    styleUrls: ['./row.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RowComponent implements OnInit {
    @Input() public song: Song;
    @Input() public index: number;

    constructor() { }

    public ngOnInit(): void {
    }

}
