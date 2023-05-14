import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HomePage } from 'src/pages/home-page/home.page';
import { LoginPage } from 'src/pages/login-page/login-page.component';
import { RegisterPage } from 'src/pages/register/register.page';
import { NavbarComponent } from 'src/components/navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from 'src/services/user.service';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
