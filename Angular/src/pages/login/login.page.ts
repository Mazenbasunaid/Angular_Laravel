import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from 'src/models/UserModel';

@Component({
  selector: 'login-page',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css']
})
export class LoginPage {
    public user? : UserModel;
    public submitted : boolean = false;
    public invalidLogin : boolean = false;

    constructor(private router : Router) { }

    public loginForm = new FormGroup({
        username: new FormControl('', [Validators.required, Validators.minLength(3)]),
        password: new FormControl('', [Validators.required])
    });

    public onSubmit() {
        this.submitted = true;
        this.invalidLogin = false;

        if (this.loginForm.controls.username.value === 'bigdaddy' &&
            this.loginForm.controls.password.value === 'password') {
                // Redirect to the home page
                this.router.navigate(['']);
        } else {
            this.invalidLogin = true;
        }
    }
}
