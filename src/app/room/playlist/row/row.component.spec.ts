import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilityModule } from '../../../utility/utility.module';
import { RowComponent } from './row.component';

describe('RowComponent', () => {
    let component: RowComponent;
    let fixture: ComponentFixture<RowComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RowComponent],
            imports: [
                UtilityModule,
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RowComponent);
        component = fixture.componentInstance;
        component.index = 1;

        component.song = {
            data: {
                link: 'string',
                title: 'string',
                thumbnails: {
                    default: {
                        url: 'string',
                        width: 0,
                        height: 0,
                    },
                    medium: {
                        url: 'string',
                        width: 0,
                        height: 0,
                    },
                    high: {
                        url: 'string',
                        width: 0,
                        height: 0,
                    },
                },
                description: 'string',
                duration: 0,
            },
            id: 'string',
            duration: 0,
            seek: 0,
        };
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
