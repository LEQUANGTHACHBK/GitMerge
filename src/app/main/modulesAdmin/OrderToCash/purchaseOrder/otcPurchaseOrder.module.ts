import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { MaterialModule } from '../../../angular-Material/material.module';
import { OtcPurchaseOrderComponent } from './otcPurchaseOrder.component';

const routes = [
    {
        path: 'modules/ordertocash/purchase',
        component: OtcPurchaseOrderComponent
    }
];

@NgModule({
    declarations: [
        OtcPurchaseOrderComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        TranslateModule,
        FuseSharedModule,
        MaterialModule
    ],
    exports: [
        OtcPurchaseOrderComponent,
    ]
})

export class OtcPurchaseOrderModule
{
}
