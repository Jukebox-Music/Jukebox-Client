import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FooterComponent } from './footer/footer.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NewRoomComponent } from './new-room/new-room.component';
import { RoomCardComponent } from './room-card/room-card.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        FormsModule,
    ],
    declarations: [
        HomeComponent,
        RoomCardComponent,
        SignUpComponent,
        NewRoomComponent,
        FooterComponent,
    ],
})
export class HomeModule { }
