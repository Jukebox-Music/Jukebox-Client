import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SortablejsModule } from 'angular-sortablejs';

import { SocketService } from '../../socket.service';
import { UtilityModule } from '../../utility/utility.module';
import { PlaylistComponent } from './playlist.component';
import { RowComponent } from './row/row.component';
import { ThumbnailComponent } from './row/thumbnail/thumbnail.component';

describe('PlaylistComponent', () => {
    let component: PlaylistComponent;
    let fixture: ComponentFixture<PlaylistComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                PlaylistComponent,
                RowComponent,
                ThumbnailComponent,
            ],
            imports: [
                UtilityModule,
                SortablejsModule.forRoot({}),
            ],
            providers: [
                SocketService,
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PlaylistComponent);
        component = fixture.componentInstance;
        component.room = {
            songs: [],
            history: [],
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
