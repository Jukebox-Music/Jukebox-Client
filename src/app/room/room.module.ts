import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { RoomRoutingModule } from './room-routing.module';
import { RoomComponent } from './room.component';
import { SearchComponent } from './search/search.component';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        RoomRoutingModule,
    ],
    declarations: [
        RoomComponent,
        SearchComponent,
    ],
    exports: [
        RoomComponent,
    ],
})
export class RoomModule { }
