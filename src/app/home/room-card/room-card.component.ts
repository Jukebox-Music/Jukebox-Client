import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'app-room-card',
    templateUrl: './room-card.component.html',
    styleUrls: ['./room-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomCardComponent {
    @Input() public room: Room;

    constructor() { }
}
