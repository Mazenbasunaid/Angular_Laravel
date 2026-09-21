import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { NavbarComponent } from './navbar.component';
import { UserModel } from 'src/models/UserModel';

describe('NavbarComponent', () => {
    let component: NavbarComponent;
    let fixture: ComponentFixture<NavbarComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [NavbarComponent],
            providers: [provideRouter([])],
        }).compileComponents();

        fixture = TestBed.createComponent(NavbarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should show correct info with a logged in user', () => {
        // Arrange
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

    it('should show login and register links when logged out', () => {
        // Arrange
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

    it('should emit logout when the log out link is clicked', () => {
        // Arrange
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
        fixture.componentInstance.navUser = user;
        fixture.detectChanges();

        let emitted = false;
        fixture.componentInstance.logout.subscribe(() => emitted = true);

        // Act
        const compiled = fixture.nativeElement as HTMLElement;
        (compiled.querySelector('.nav-link') as HTMLElement)?.click();

        // Assert
        expect(emitted).toBeTrue();
    });
});
