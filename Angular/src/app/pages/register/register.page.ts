import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterRequestModel } from 'src/models/RegisterRequestModel';
import { UserModel } from 'src/models/UserModel';
import { UserService } from 'src/services/user.service';

@Component({
    selector: 'register-page',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.css'],
})
export class RegisterPage {
    public user?: UserModel;
    public submitted: boolean = false;
    public invalidRegister: boolean = false;

    public registerForm: FormGroup = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        username: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        confirm: new FormControl('', [Validators.required, Validators.minLength(6)]),
        fname: new FormControl('', [Validators.required]),
        lname: new FormControl('', [Validators.required]),
        dob: new FormControl(new Date().toISOString().split('T')[0], [Validators.required])
    }, { validators: passwordValidator('password', 'confirm') });

    constructor(private router: Router,
        private userService: UserService) { }

    public onSubmit() {
        this.submitted = true;
        this.invalidRegister = false;

        const regModel : RegisterRequestModel = {
            email: this.registerForm.controls['email'].value as string,
            username: this.registerForm.controls['username'].value as string,
            password: this.registerForm.controls['password'].value as string,
            fname: this.registerForm.controls['fname'].value as string,
            lname: this.registerForm.controls['lname'].value as string,
            dob: this.registerForm.controls['dob'].value as string
        }
        this.userService.register(regModel).subscribe({
            next: resp => {
                if (resp?.state !== 'success') {
                    this.invalidRegister = true;
                    console.error(resp);
                } else {
                    this.router.navigate(['']);
                }
            },
            error: err => {
                console.error(err);
                this.invalidRegister = true;
            }
        })
    }
}

export function passwordValidator(controlName: string, matchingControlName: string) {
    return (group: AbstractControl) => {
        const pass = group.get(controlName)?.value;
        const confirmPass = group.get(matchingControlName)?.value;

        return pass === confirmPass ? null : {
            confirm: true
        };
    };
}
