import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { UtilityModule } from '../utility/utility.module';
import { ChatComponent } from './chat/chat.component';
import { PlayerModule } from './player/player.module';
import { PlaylistComponent } from './playlist/playlist.component';
import { RoomRoutingModule } from './room-routing.module';
import { RoomComponent } from './room.component';
import { SearchModule } from './search/search.module';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        RoomRoutingModule,
        SearchModule,
        FormsModule,
        PlayerModule,
        UtilityModule,
    ],
    declarations: [
        RoomComponent,
        ChatComponent,
        PlaylistComponent,
    ],
    exports: [
        RoomComponent,
    ],
})
export class RoomModule { }
