import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import 'rxjs/add/operator/map';

import { RoomComponent } from './room.component';

describe('RoomComponent', () => {
    let component: RoomComponent;
    let fixture: ComponentFixture<RoomComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RoomComponent],
            imports: [
                RouterTestingModule,
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
