import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { MaterialModule } from '../../../angular-Material/material.module';
import { InventoryComponent} from './Inventory.component';

import { AgGridModule } from 'ag-grid-angular';

import { HttpClientModule } from '@angular/common/http';

import { ActiveCellCustomComponent } from './active-cell/active-cell.component'; //Yes or No

const routes = [
    {
        path: 'multisales/products/inventory',
        component: InventoryComponent
    }
];

@NgModule({
    declarations: [
        InventoryComponent,
        ActiveCellCustomComponent, //Yes or No
    ],
    imports: [
        RouterModule.forChild(routes),
        TranslateModule,
        FuseSharedModule,
        MaterialModule,

        HttpClientModule,
        AgGridModule.withComponents([])
    ],
    providers:[],
    entryComponents:[ActiveCellCustomComponent], //Yes or No
    exports: [
        InventoryComponent,
    ]
})

export class InventorysModule
{
}
