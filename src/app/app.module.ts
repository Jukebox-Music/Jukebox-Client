import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { RoomModule } from './room/room.module';
import { SocketService } from './socket.service';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RoomModule,
        HomeModule,
    ],
    providers: [
        SocketService,
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }