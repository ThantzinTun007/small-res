import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../service/restaurant.service';
import { Router } from '@angular/router';
import { response } from 'express';

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

  constructor(private services: RestaurantService, private router: Router) {}

  getAll() {
    this.services.getAllEmployees().subscribe(
      (response) => {
        console.log(`successfully`, response);
        this.employees = response;
      },
      (error) => {
        console.log( error.message || `error`);
      }
    );
  }

  logOut() {
    this.services.logOut();
  }


}
