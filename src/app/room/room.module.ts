import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { RoomRoutingModule } from './room-routing.module';
import { RoomComponent } from './room.component';
import { SearchModule } from './search/search.module';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        RoomRoutingModule,
        SearchModule,
    ],
    declarations: [
        RoomComponent,
    ],
    exports: [
        RoomComponent,
    ],
})
export class RoomModule { }
