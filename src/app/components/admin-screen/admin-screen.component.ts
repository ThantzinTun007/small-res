import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../service/restaurant.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import e, { response } from 'express';

@Component({
  selector: 'app-admin-screen',
  templateUrl: './admin-screen.component.html',
  styleUrl: './admin-screen.component.css',
})
export class AdminScreenComponent implements OnInit {
  employees: any[] = [];

  ngOnInit() {
    this.getAll();
  }

  constructor(
    private services: RestaurantService,
    private router: Router,
    private cookieService: CookieService
  ) {}

  email: string = this.cookieService.get('email') || '';

  getAll() {
    this.services.getAllEmployees().subscribe(
      (response) => {
        console.log(`successfully`, response);
        // this.employees = response;
        this.employees = response.filter((i: any) => i.email !== this.email);
      },
      (error) => {
        console.log(error.message || `error`);
      }
    );
  }



  deleteOneEmployee(id: number) {
    this.services.deleteOneEmployee(id).subscribe(
      (response) => {
        console.log(`successfully`, response);
        this.employees = this.employees.filter(
          (item) => item.employee_id !== id
        );
      },
      (error) => {
        alert(error.message);
      }
    );
  }

  logOut() {
    this.services.logOut();
  }
}
