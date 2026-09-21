import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserModel } from 'src/models/UserModel';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
    standalone: true,
    imports: [RouterLink]
})
export class NavbarComponent {
  @Input() navUser?: UserModel;
  @Output() logout = new EventEmitter<void>();
}
