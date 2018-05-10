import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';
import { RegisterService } from '../../../../services/connexionservices/register.service';
import { UtilsService } from '../../../../services/utils/utils.service';

@Component({
    selector: 'fuse-register-2',
    templateUrl: './register-2.component.html',
    styleUrls: ['./register-2.component.scss'],
    animations: fuseAnimations
})
export class FuseRegister2Component implements OnInit {
    host: any;
    registerForm: FormGroup;
    registerFormErrors: any;

    constructor(
        private fuseConfig: FuseConfigService,
        private formBuilder: FormBuilder,
        private registerCXU: RegisterService,
        public util: UtilsService
    ) {
        this.host = util.getBaseUrl();
        this.fuseConfig.setConfig({
            layout: {
                navigation: 'none',
                toolbar: 'none',
                footer: 'none'
            }
        });

        this.registerFormErrors = {
            name: {},
            email: {},
            password: {},
            passwordConfirm: {}
        };
    }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required],
            passwordConfirm: ['', [Validators.required, confirmPassword]]
        });

        // this.registerForm.valueChanges.subscribe(() => {
        //     this.onRegisterFormValuesChanged();
            
        // });
    }

    registerUsers() {
        console.log('I am called');
        var email = this.registerForm.value.email;
        console.log('username', email);
        var password = this.registerForm.value.password;
        
        console.log('password', password);
        this.registerCXU.registerConnexionUser(email,password,this.host).subscribe((data)=>{
            console.log(data,'RegisterForms');
        });
    }
    onRegisterFormValuesChanged() {
        for (const field in this.registerFormErrors) {
            if (!this.registerFormErrors.hasOwnProperty(field)) {
                continue;
            }

            // Clear previous errors
            this.registerFormErrors[field] = {};

            // Get the control
            const control = this.registerForm.get(field);
            //  console.log(control);
            if (control && control.dirty && !control.valid) {
                this.registerFormErrors[field] = control.errors;
            }
        }
    }
}

function confirmPassword(control: AbstractControl) {
    if (!control.parent || !control) {
        return;
    }

    const password = control.parent.get('password');
    const passwordConfirm = control.parent.get('passwordConfirm');

    if (!password || !passwordConfirm) {
        return;
    }

    if (passwordConfirm.value === '') {
        return;
    }

    if (password.value !== passwordConfirm.value) {
        return {
            passwordsNotMatch: true
        };
    }

}
