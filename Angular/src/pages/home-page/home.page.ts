import { Component } from '@angular/core';
import { UserModel } from 'src/models/UserModel';

@Component({
  selector: 'home-page',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css']
})
export class HomePage {
    public user? : UserModel;

    constructor() {
        /*this.user = {
            name: 'Big Daddy',
            email: 'bigdaddy@sugar.com',
            lang: 'en-US',
            dob: '1900-01-01',
            license_accepted: false
        };*/
    }
}
