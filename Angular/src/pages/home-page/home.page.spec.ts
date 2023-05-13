import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePage } from './home.page';
import { UserService } from 'src/services/user.service';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from 'src/components/navbar/navbar.component';

describe('HomePageComponent', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePage, NavbarComponent ],
      providers: [ UserService ],
      imports: [ AppRoutingModule, HttpClientModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
