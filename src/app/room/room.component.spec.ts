import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';

import { SocketService } from '../socket.service';
import { UtilityModule } from '../utility/utility.module';
import { ChatComponent } from './chat/chat.component';
import { PlayerModule } from './player/player.module';
import { PlaylistComponent } from './playlist/playlist.component';
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
                PlaylistComponent,
            ],
            imports: [
                RouterTestingModule,
                FormsModule,
                HttpModule,
                SearchModule,
                PlayerModule,
                UtilityModule,
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
