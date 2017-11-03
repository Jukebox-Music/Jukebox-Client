import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';

import { SocketService } from '../socket.service';
import { AppStoreModule } from '../store/app-store.module';
import { HomeComponent } from './home.component';
import { NewRoomComponent } from './new-room/new-room.component';
import { RoomCardComponent } from './room-card/room-card.component';
import { SignUpComponent } from './sign-up/sign-up.component';

describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                HomeComponent,
                RoomCardComponent,
                SignUpComponent,
                NewRoomComponent,
            ],
            imports: [
                RouterTestingModule,
                FormsModule,
                AppStoreModule,
            ],
            providers: [
                SocketService,
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
