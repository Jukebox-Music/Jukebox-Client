import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { NewRoomComponent } from './new-room.component';

describe('NewRoomComponent', () => {
    let component: NewRoomComponent;
    let fixture: ComponentFixture<NewRoomComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                NewRoomComponent,
            ],
            imports: [
                FormsModule,
                RouterTestingModule,
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NewRoomComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
