import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/models/UserModel';
import { UserService } from 'src/services/user.service';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';

@Component({
    selector: 'home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css'],
    standalone: true,
    imports: [NavbarComponent]
})
export class HomePage implements OnInit {
    public user? : UserModel;

    constructor(private userService: UserService) { }

    ngOnInit(): void {
        this.userService.getUserData().subscribe(data => {
            if (data?.state === 'success') {
                this.user = data;
            } else {
                console.log(data);
            }
        });
    }

    public onLogout(): void {
        this.userService.logout().subscribe(() => {
            this.user = undefined;
        });
    }
}
