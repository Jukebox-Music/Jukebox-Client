import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RoomRoutingModule } from './room-routing.module';
import { RoomComponent } from './room.component';
import { SearchItemComponent } from './search/search-item/search-item.component';
import { SearchComponent } from './search/search.component';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RoomRoutingModule,
    ],
    declarations: [
        RoomComponent,
        SearchComponent,
        SearchItemComponent,
    ],
    exports: [
        RoomComponent,
    ],
})
export class RoomModule { }
