import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { RoomCardComponent } from './room-card.component';

describe('RoomCardComponent', () => {
    let component: RoomCardComponent;
    let fixture: ComponentFixture<RoomCardComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RoomCardComponent],
            imports: [
                RouterTestingModule,
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RoomCardComponent);
        component = fixture.componentInstance;
        component.room = {
            sockets: {
                'h': true,
            },
            length: 1,
            room: {
                songs: [],
                playState: 'play',
                name: '',
                totalUsers: 1,
            },
        };
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
