import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/models/UserModel';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
    @Input() navUser? : UserModel;

    constructor(private router : Router,
        private userService : UserService) {}

    public logout(): void {
        this.userService.logout().subscribe({
            next: resp => {
                this.router.navigate(['']);
            },
            error: err => {
                console.error(err);
            }
        });
    }
}
