import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from 'src/app/pages/home-page/home-page.component';
import { LoginPage } from 'src/app/pages/login-page/login-page.component';
import { RegisterPage } from 'src/app/pages/register-page/register-page.component';
//import { AboutUsPage } from 'src/app/pages/about-us/about-us.component';
//import { ContactPage } from 'src/app/pages/contact/contact.component';

const routes: Routes = [
    { path: '', component: HomePage },
    { path: 'login', component: LoginPage },
    { path: 'register', component: RegisterPage },
//    { path: 'about-us', component: AboutUsPage },
//    { path: 'contact', component: ContactPage }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
