import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { MaterialModule } from '../../../angular-Material/material.module';
import { LoginComponent} from './login.component';
import { AlertModule} from '../../../_shared/alert/alert.module'
const routes = [
    {
        path: 'auth/login',
        component: LoginComponent
    }
];

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        TranslateModule,
        FuseSharedModule,
        MaterialModule,
        AlertModule
    ],
    exports: [
        LoginComponent,
    ]
})

export class LoginModule
{
}
