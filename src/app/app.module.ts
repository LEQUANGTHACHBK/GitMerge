import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from './main/angular-Material/material.module'
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { DropdownModule } from 'primeng/dropdown';
import 'hammerjs';

import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';

import { fuseConfig } from 'app/fuse-config';

import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/layout/layout.module';
import { SampleModule } from 'app/main/sample/sample.module';
import { PagesModule} from './main/pages/pages.module';
import { ShareModule } from './main/_shared/_share.module';
import { LoginComponent} from './main/pages/authentication/login/login.component';
import { RegisterComponent } from './main/pages/authentication/register/register.component'
import { VerifyCodeComponent } from './main/pages/authentication/verify-code/verify-code.component'
import { ForgotPasswordComponent } from './main/pages/authentication/forgot-password/forgot-password.component'
import { MultiSalesModule } from './main/multisales/multisale.module';
import { ModulesModule } from './main/modulesAdmin/modules.module'
import { DialCodeComponent} from './main/pages/authentication/dial-code/dial-code.component'
//Service
import { LoginService} from './main/pages/authentication/login/login.service'

const appRoutes: Routes = [
    {   path: 'login',
        component: LoginComponent
    },
    {
        path :'ngprime',
        component: DialCodeComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path : 'register/verify',
        component: VerifyCodeComponent
    },
    {
        path: 'forgotpassword',
        component: ForgotPasswordComponent
    },
    {
        path: 'multisales',
        loadChildren: './main/multisales/multisales.module#MultiSalesModule'
    },
    {
        path: 'modules',
        loadChildren: './main/modulesAdmin/modules.module#ModulesModule'
    },
    {
        path: '**',
        redirectTo: 'login'
    },
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),
        TranslateModule.forRoot(),
        FormsModule,
        ReactiveFormsModule,
        
        PagesModule,
        ShareModule,
        MultiSalesModule,
        ModulesModule,

        // Material
        MaterialModule,

        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        // App modules
        LayoutModule,
        SampleModule,
        // ngprime
        DropdownModule
    ],
    providers: [LoginService]
    ,
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}
