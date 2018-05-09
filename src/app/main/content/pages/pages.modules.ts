import { NgModule } from '@angular/core';

import { Login2Module } from './authentication/login/login-2.module';
import { Register2Module } from './authentication/register/register-2.module';
import { ForgotPassword2Module } from './authentication/forgot-password/forgot-password-2.module';
import { ResetPassword2Module } from './authentication/reset-password/reset-password-2.module';
import { LockModule } from './authentication/lock/lock.module';
import { MailConfirmModule } from './authentication/mail-confirm/mail-confirm.module';
import { UsersModule } from './users/users.module';


@NgModule({
    imports: [
        // Auth
        Login2Module,
        Register2Module,
        ForgotPassword2Module,
        ResetPassword2Module,
        LockModule,
        MailConfirmModule,
    
    ]
})
export class ConnexionPagesModule
{

}
