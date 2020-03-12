import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { MaterialModule } from '../../angular-Material/material.module';
import { OrdersComponent} from './orders.component';

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
        MaterialModule
    ],
    exports: [
        OrdersComponent,
    ]
})

export class OrdersModule
{
}
