import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ChatComponent } from './chat/chat.component';
import { PlayerModule } from './player/player.module';
import { PlaylistModule } from './playlist/playlist.module';
import { RoomRoutingModule } from './room-routing.module';
import { RoomComponent } from './room.component';
import { RoomService } from './room.service';
import { SearchModule } from './search/search.module';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        RoomRoutingModule,
        SearchModule,
        FormsModule,
        PlayerModule,
        PlaylistModule,
    ],
    declarations: [
        RoomComponent,
        ChatComponent,
    ],
    providers: [
        RoomService,
    ],
    exports: [
        RoomComponent,
    ],
})
export class RoomModule { }
