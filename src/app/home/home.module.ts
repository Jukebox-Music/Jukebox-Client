import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { RoomCardComponent } from './room-card/room-card.component';

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
    ],
    declarations: [HomeComponent, RoomCardComponent],
})
export class HomeModule { }
