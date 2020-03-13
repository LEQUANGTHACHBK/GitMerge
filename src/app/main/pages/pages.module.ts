import { NgModule } from '@angular/core';

//Authentication
import { LoginModule} from './authentication/login/login.module';
import { ForgotPasswordModule} from './authentication/forgot-password/forgot-password.module';
import { RegisterModule} from './authentication/register/register.module';
import { VerifyCodeModule} from './authentication/verify-code/verifyCode.module';
import { NgprimeModule } from './authentication/ngprime/ngprime.module'
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
    imports: [
        // Authentication
        LoginModule,
        ForgotPasswordModule,
        RegisterModule,
        VerifyCodeModule,
        NgprimeModule,
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
