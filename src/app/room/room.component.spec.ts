import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import 'rxjs/add/operator/map';

import { SocketService } from '../socket.service';
import { PlayerComponent } from './player/player.component';
import { RoomComponent } from './room.component';
import { SearchModule } from './search/search.module';

describe('RoomComponent', () => {
    let component: RoomComponent;
    let fixture: ComponentFixture<RoomComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                RoomComponent,
                PlayerComponent,
            ],
            imports: [
                RouterTestingModule,
                FormsModule,
                HttpModule,
                SearchModule,
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
