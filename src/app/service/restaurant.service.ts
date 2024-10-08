import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Observable, map } from 'rxjs';
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

  postMenuitem(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/menuitems`, data);
  }

  addExpend(expend: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/createExpense`, expend);
  }

  getAllExpend(): Observable<any> {
    const headers = this.getHeaders();
    return this.http.get(`${this.apiUrl}/expenditures`, { headers });
  }

  getAllEmployees(): Observable<any> {
    const headers = this.getHeaders();
    return this.http.get(`${this.apiUrl}/employees`, { headers });
  }

  getOneEmployees(employeeId: number): Observable<any> {
    const headers = this.getHeaders();
    return this.http.get(`${this.apiUrl}/soloEmployee/${employeeId}`, {
      headers,
    });
  }

  getAllMenus(): Observable<any[]> {
    const headers = this.getHeaders();
    return this.http.get<any[]>(`${this.apiUrl}/menuitems`, { headers }).pipe(
      map((menuItems: any[]) => {
        return menuItems.map((menuItem) => {
          menuItem.imageUrl = `${this.apiUrl}${menuItem.image_url}`;
          return menuItem;
        });
      })
    );
  }

  getOneMenuitem(id: number): Observable<any> {
    const headers = this.getHeaders();
    return this.http
      .get<any>(`${this.apiUrl}/menuitems/${id}`, { headers })
      .pipe(
        map((menuItem: any) => {
          menuItem.imageUrl = `${this.apiUrl}${menuItem.image_url}`;
          return menuItem;
        })
      );
  }

  updateEmployees(id: number, employee: any): Observable<any> {
    const headers = this.getHeaders();
    return this.http.put(`${this.apiUrl}/updateEmployee/${id}`, employee, {
      headers,
    });
  }

  updatePassword(id: number, data: any): Observable<any> {
    const headers = this.getHeaders();
    return this.http.put(`${this.apiUrl}/updatePassword/${id}`, data, {
      headers,
    });
  }

  updateMenuItem(id: number, menuItem: any): Observable<any> {
    const headers = this.getHeaders();
    return this.http.put(`${this.apiUrl}/menuitems/${id}`, menuItem, {
      headers,
    });
  }

  updateExpend(id: number, expendItem: any): Observable<any> {
    const headers = this.getHeaders();
    return this.http.put(`${this.apiUrl}/updateExpense/${id}`, expendItem, {
      headers,
    });
  }

  deleteOneEmployee(employeeId: any): Observable<any> {
    const headers = this.getHeaders();
    return this.http.delete(`${this.apiUrl}/deleteOneEmployee/${employeeId}`, {
      headers,
    });
  }

  deleteOneMunuitem(menuitemId: any): Observable<any> {
    const headers = this.getHeaders();
    return this.http.delete(`${this.apiUrl}/menuitems/${menuitemId}`, {
      headers,
    });
  }

  deleteOneExpend(id: number): Observable<any> {
    const headers = this.getHeaders();
    return this.http.delete(`${this.apiUrl}/deleteOneExpense/${id}`, {
      headers,
    });
  }
}
