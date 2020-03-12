import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { MaterialModule } from '../../angular-Material/material.module';
import { SalesComponent} from './sales.component'

const routes = [
    {
        path: 'multisales/sales',
        component: SalesComponent
    }
];

@NgModule({
    declarations: [
        SalesComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        TranslateModule,
        FuseSharedModule,
        MaterialModule
    ],
    exports: [
        SalesComponent,
    ]
})

export class SalesModule
{
}
