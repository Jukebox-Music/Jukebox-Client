import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RoomRoutingModule } from './room-routing.module';
import { RoomComponent } from './room.component';

@NgModule({
    imports: [
        CommonModule,
        RoomRoutingModule,
    ],
    declarations: [
        RoomComponent,
    ],
    exports: [
        RoomComponent,
    ],
})
export class RoomModule { }
