import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePage } from '../pages/home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { LoginPage } from 'src/pages/login-page/login-page.component';
import { RegisterPage } from 'src/pages/register/register.page';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from 'src/services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    LoginPage,
    RegisterPage,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
