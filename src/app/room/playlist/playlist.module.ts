import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SortablejsModule } from 'angular-sortablejs/dist';

import { UtilityModule } from '../../utility/utility.module';
import { PlaylistComponent } from './playlist.component';
import { RowComponent } from './row/row.component';
import { ThumbnailComponent } from './row/thumbnail/thumbnail.component';

@NgModule({
    imports: [
        CommonModule,
        SortablejsModule,
        UtilityModule,
    ],
    declarations: [
        PlaylistComponent,
        RowComponent,
        ThumbnailComponent,
    ],
    exports: [
        PlaylistComponent,
    ],
})
export class PlaylistModule { }
