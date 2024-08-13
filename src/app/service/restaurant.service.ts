import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  private apiUrl = 'http://localhost:8080/api/res';

  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private router: Router
  ) {}

  private getHeaders(): HttpHeaders {
    const token = this.cookieService.get('access_token') || '';
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
  }

  //logIn function
  logIn(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/logIn`, credentials);
  }

  //logOut function
  logOut() {
    this.cookieService.delete('email');
    this.cookieService.delete('access_token');
    this.router.navigate(['/logIn']);
  }

  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }
}
