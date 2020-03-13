import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { MaterialModule } from '../../../angular-Material/material.module';
import { NgprimeComponent } from './ngprime.component';
import { AlertModule } from '../../../_shared/alert/alert.module'
const routes = [
    {
        path: 'ngprime',
        component: NgprimeComponent
    }
];

@NgModule({
    declarations: [
        NgprimeComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        TranslateModule,
        FuseSharedModule,
        MaterialModule,
        AlertModule
    ],
    exports: [
        NgprimeComponent,
    ]
})

export class NgprimeModule
{
}
