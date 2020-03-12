import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { MaterialModule } from '../../../angular-Material/material.module';
import { InventoryComponent} from './Inventory.component'

const routes = [
    {
        path: 'multisales/products/inventory',
        component: InventoryComponent
    }
];

@NgModule({
    declarations: [
        InventoryComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        TranslateModule,
        FuseSharedModule,
        MaterialModule
    ],
    exports: [
        InventoryComponent,
    ]
})

export class InventorysModule
{
}
