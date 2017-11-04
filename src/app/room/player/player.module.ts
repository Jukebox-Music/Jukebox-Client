import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PlayerComponent } from './player.component';
import { SeekComponent } from './seek/seek.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        PlayerComponent,
        SeekComponent,
    ],
    exports: [
        PlayerComponent,
    ],
})
export class PlayerModule { }
