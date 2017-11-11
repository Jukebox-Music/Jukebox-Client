import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SortablejsModule } from 'angular-sortablejs';

import { UtilityModule } from '../../utility/utility.module';
import { PlaylistComponent } from './playlist.component';

describe('PlaylistComponent', () => {
    let component: PlaylistComponent;
    let fixture: ComponentFixture<PlaylistComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PlaylistComponent],
            imports: [
                UtilityModule,
                SortablejsModule,
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PlaylistComponent);
        component = fixture.componentInstance;
        component.room = {
            songs: [],
            playState: 'pause',
            name: 'test',
            totalUsers: 1,
        };

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
