import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from 'src/models/UserModel';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'login-page',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css']
})
export class LoginPage implements OnInit {
    public user? : UserModel;
    public submitted : boolean = false;
    public invalidLogin : boolean = false;

    constructor(private router : Router,
        private userService : UserService) { }

    ngOnInit(): void {
        this.userService.getUserData().subscribe(data => {
            if (data?.state === 'success') {
                this.router.navigate(['']);
            }
        });
    }

    public loginForm = new FormGroup({
        username: new FormControl('', [Validators.required, Validators.minLength(3)]),
        password: new FormControl('', [Validators.required])
    });

    public onSubmit() {
        this.submitted = true;
        this.invalidLogin = false;

        const username = this.loginForm.controls.username.value as string;
        const password = this.loginForm.controls.password.value as string;
        this.userService.login(username, password).subscribe(resp => {
            if (resp?.state === 'success') {
                this.router.navigate(['']);
            } else {
                this.invalidLogin = true;
            }
        });
    }
}
