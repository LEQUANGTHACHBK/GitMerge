import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { MaterialModule } from '../../angular-Material/material.module';
import { OrdersComponent} from './orders.component';

import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';

const routes = [
    {
        path: 'multisales/orders',
        component: OrdersComponent
    }
];

@NgModule({
    declarations: [
        OrdersComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        TranslateModule,
        FuseSharedModule,
        MaterialModule,
        HttpClientModule,
        AgGridModule.withComponents([])
    ],
    exports: [
        OrdersComponent,
    ]
})

export class OrdersModule
{
}
