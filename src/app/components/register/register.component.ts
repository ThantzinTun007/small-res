import { Component } from '@angular/core';
import { RestaurantService } from '../../service/restaurant.service';
import { Router } from '@angular/router';
import { response } from 'express';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  employee: any = {
    name: '',
    position: '',
    salary: '',
    hire_date: '',
    phone: '',
    email: '',
    password: '',
    role: 0,
  };

  constructor(private service: RestaurantService, private router: Router) {}

  register() {
    this.service.register(this.employee).subscribe(
      (response) => {
        console.log(response);
        alert('Register successfully!');
        this.employee = {};
        this.router.navigate(['/register']);
      },
      (error) => {
        console.log(error.message);
      }
    );
  }
}
