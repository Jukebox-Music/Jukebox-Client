import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { RoomCardComponent } from './room-card/room-card.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        FormsModule,
    ],
    declarations: [HomeComponent, RoomCardComponent, SignUpComponent],
})
export class HomeModule { }
