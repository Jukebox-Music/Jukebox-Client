import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeModule } from './home/home.module';
import { RoomModule } from './room/room.module';
import { SocketService } from './socket.service';
import { AppStoreModule } from './store/app-store.module';

@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
        HeaderComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RoomModule,
        HomeModule,
        AppStoreModule,
    ],
    providers: [
        SocketService,
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
