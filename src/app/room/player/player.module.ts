import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { PlayerComponent } from './player.component';
import { SeekComponent } from './seek/seek.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
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
