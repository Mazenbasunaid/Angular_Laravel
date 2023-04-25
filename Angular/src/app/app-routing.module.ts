import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from 'src/pages/home-page/home.page';
import { LoginPage } from 'src/pages/login/login.page';

const routes: Routes = [
    { path: '', component: HomePage },
    { path: 'login', component: LoginPage }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
