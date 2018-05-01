import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { UtilityModule } from '../../utility/utility.module';
import { SearchItemComponent } from './search-item/search-item.component';
import { SearchComponent } from './search.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        UtilityModule,
    ],
    declarations: [
        SearchComponent,
        SearchItemComponent,
    ],
    exports: [
        SearchComponent,
    ],
})
export class SearchModule { }
