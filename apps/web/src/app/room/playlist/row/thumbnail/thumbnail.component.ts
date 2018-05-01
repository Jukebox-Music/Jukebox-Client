import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-thumbnail',
    templateUrl: './thumbnail.component.html',
    styleUrls: ['./thumbnail.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThumbnailComponent implements OnInit {
    @Input() public url: string;

    constructor() { }

    public ngOnInit(): void {
    }

}
