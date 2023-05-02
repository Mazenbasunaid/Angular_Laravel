import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from 'src/models/UserModel';

@Component({
  selector: 'login-page',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.css']
})
export class RegisterPage {
    public user? : UserModel;
    public submitted : boolean = false;
    public invalidRegister : boolean = false;

    constructor(private router : Router) { }

    public registerForm = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        username: new FormControl('', [Validators.required, Validators.minLength(12),Validators.minLength(21)]),
        fname: new FormControl('', [Validators.required]),
        lname: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        confirm: new FormControl('', [Validators.required, Validators.minLength(6)]),
        dob: new FormControl(new Date().toISOString().split('T')[0], [Validators.required])
    });

    public onSubmit() {
        this.submitted = true;
        this.invalidRegister = false;

        if (this.registerForm.controls.email.value === 'bigdaddy' &&
            this.registerForm.controls.username.value === 'biggusdiggus' &&
            this.registerForm.controls.fname.value === 'sweetsugar' &&
            this.registerForm.controls.lname.value === 'sweeter' &&
            this.registerForm.controls.password.value === 'password') {
                // Redirect to the home page
                //this.router.navigate(['']);
        } else {
            this.invalidRegister = true;
        }
    }
}

export function passwordValidator(controlName: string, matchingControlName:string {
    return (group: AbstractControl) => {
    const passCtrl = group.get(controlName);
    const confirmPassCtrl = group.get(matchingControlName);

    if (pass !== confirmPass) {
        group.get(controlName).errors['match'] = {}
        }
    }
}
