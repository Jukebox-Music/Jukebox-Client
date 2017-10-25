import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import 'rxjs/add/operator/filter';

import { SocketService } from '../socket.service';
import { HomeComponent } from './home.component';
import { RoomCardComponent } from './room-card/room-card.component';

describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                HomeComponent,
                RoomCardComponent,
            ],
            imports: [
                RouterTestingModule,
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
