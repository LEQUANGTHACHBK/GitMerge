import { NgModule } from '@angular/core';

//Authentication
import { LoginModule} from './authentication/login/login.module';
import { ForgotPasswordModule} from './authentication/forgot-password/forgot-password.module';
import { RegisterModule} from './authentication/register/register.module';
import { VerifyCodeModule} from './authentication/verify-code/verifyCode.module'

//Products

@NgModule({
    imports: [
        // Authentication
        LoginModule,
        ForgotPasswordModule,
        RegisterModule,
        VerifyCodeModule,



    ],
    exports:[
        // LoginComponent,
        // ForgotPasswordComponent,
        // RegisterComponent,
        // VerifyCodeComponent
    ]
})
export class PagesModule
{

}
