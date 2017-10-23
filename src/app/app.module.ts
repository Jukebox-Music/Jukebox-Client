import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RoomModule } from './room/room.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        RoomModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
