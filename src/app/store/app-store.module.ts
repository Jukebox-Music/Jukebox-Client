import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { REDUCERS } from './reducers';
import { UserEffects } from './user';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forRoot(REDUCERS),
        EffectsModule.forRoot([UserEffects]),
    ],
    declarations: [],
})
export class AppStoreModule { }
