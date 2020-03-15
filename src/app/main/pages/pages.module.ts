import { NgModule } from '@angular/core';

//Authentication
import { LoginModule} from './authentication/login/login.module';
import { ForgotPasswordModule} from './authentication/forgot-password/forgot-password.module';
import { RegisterModule} from './authentication/register/register.module';
import { VerifyCodeModule} from './authentication/verify-code/verifyCode.module';
import { DialCodeModule } from './authentication/dial-code/dial-code.module'
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
    imports: [
        // Authentication
        LoginModule,
        ForgotPasswordModule,
        RegisterModule,
        VerifyCodeModule,
        DialCodeModule,
        DropdownModule
    ],
    exports:[
        
        // LoginComponent,
        // ForgotPasswordComponent,
        // RegisterComponent,
        // VerifyCodeComponent
    ],
    declarations: []
})
export class PagesModule
{

}
