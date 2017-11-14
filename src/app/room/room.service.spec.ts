import { inject, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { SocketService } from '../socket.service';
import { RoomService } from './room.service';

describe('RoomService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                RoomService,
                SocketService,
            ],
            imports: [
                StoreModule.forRoot({}),
            ],
        });
    });

    it('should be created', inject([RoomService], (service: RoomService) => {
        expect(service).toBeTruthy();
    }));
});
