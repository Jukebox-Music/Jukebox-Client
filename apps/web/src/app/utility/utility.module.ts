import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SecondToTimePipe } from './second-to-time.pipe';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        SecondToTimePipe,
    ],
    exports: [
        SecondToTimePipe,
    ],
})
export class UtilityModule { }
