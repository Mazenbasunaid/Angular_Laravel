import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';
import { UserService } from 'src/services/user.service';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { UserModel } from 'src/models/UserModel';

describe('NavbarComponent', () => {
    let component: NavbarComponent;
    let fixture: ComponentFixture<NavbarComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [NavbarComponent],
            providers: [UserService],
            imports: [AppRoutingModule, HttpClientModule],
        }).compileComponents();

        fixture = TestBed.createComponent(NavbarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should show correct info with a logged in user', () => {
        // Assert
        const user : UserModel = {
            email: 'not@important.data',
            dob: '2000-01-01',
            lang: 'en-US',
            license_accepted: true,
            name: 'Bob',
            state: 'success',
            message: ''
        };
        fixture = TestBed.createComponent(NavbarComponent);

        // Act
        fixture.componentInstance.navUser = user;
        fixture.detectChanges();

        // Assert
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('span')?.textContent).toContain('Hello, Bob');
        const navLinks = compiled.querySelectorAll('.nav-link');
        expect(navLinks).toHaveSize(1);
        expect(navLinks[0]?.textContent).toContain('Log out');
    });

    it('should show correct info with a logged in user', () => {
        // Assert
        fixture = TestBed.createComponent(NavbarComponent);

        // Act
        fixture.detectChanges();

        // Assert
        const compiled = fixture.nativeElement as HTMLElement;
        const navLinks = compiled.querySelectorAll('.nav-link');
        expect(navLinks).toHaveSize(2);
        expect(navLinks[0]?.textContent).toContain('Login');
        expect(navLinks[1]?.textContent).toContain('Register');
    });
});
