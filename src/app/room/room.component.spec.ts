import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { SortablejsModule } from 'angular-sortablejs';

import { SocketService } from '../socket.service';
import { ChatComponent } from './chat/chat.component';
import { PlayerModule } from './player/player.module';
import { PlaylistModule } from './playlist/playlist.module';
import { RoomComponent } from './room.component';
import { SearchModule } from './search/search.module';

describe('RoomComponent', () => {
    let component: RoomComponent;
    let fixture: ComponentFixture<RoomComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                RoomComponent,
                ChatComponent,
            ],
            imports: [
                RouterTestingModule,
                FormsModule,
                HttpModule,
                SearchModule,
                PlayerModule,
                PlaylistModule,
            ],
            providers: [
                SocketService,
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RoomComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
