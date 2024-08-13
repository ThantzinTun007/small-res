import { Component } from '@angular/core';
import { RestaurantService } from '../../service/restaurant.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { emit } from 'process';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  credentials = {
    email: '',
    password: '',
  };

  constructor(
    private service: RestaurantService,
    private cookieService: CookieService,
    private router: Router
  ) {}

  logIn() {
    this.service.logIn(this.credentials).subscribe(
      (response) => {
        console.log('Login successful', response);
        this.cookieService.set('email', response.user.email);
        this.cookieService.set('access_token', response.accessToken);
        if (response.user.role === 0) {
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/home']);
        }
      },
      (error) => {
        alert(error?.error?.message || 'Login failed');
        console.error('Login error', error);
      }
    );
  }
}
