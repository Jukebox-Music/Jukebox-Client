import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilityModule } from '../../../utility/utility.module';
import { SearchItemComponent } from './search-item.component';

describe('SearchItemComponent', () => {
    let component: SearchItemComponent;
    let fixture: ComponentFixture<SearchItemComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SearchItemComponent],
            imports: [
                UtilityModule,
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SearchItemComponent);
        component = fixture.componentInstance;
        component.searchResult = {
            link: '',
            title: '',
            thumbnails: {
                default: {
                    url: '',
                    width: 0,
                    height: 0,
                },
                medium: {
                    url: '',
                    width: 0,
                    height: 0,
                },
                high: {
                    url: '',
                    width: 0,
                    height: 0,
                },
            },
            description: '',
            duration: 1,
        };
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
