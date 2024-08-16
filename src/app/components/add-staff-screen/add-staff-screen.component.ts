import { Component } from '@angular/core';
import { RestaurantService } from '../../service/restaurant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-staff-screen',
  templateUrl: './add-staff-screen.component.html',
  styleUrl: './add-staff-screen.component.css',
})
export class AddStaffScreenComponent {
  user: any = {
    name: '',
    position: '',
    salary: '',
    hire_date: '',
    phone: '',
    email: '',
    password: '',
    role: 1,
  };

  constructor(private service: RestaurantService, private router: Router) {}

  //create employee
  create() {
    this.service.register(this.user).subscribe(
      (response) => {
        alert('Registration successful');
        console.log('Registration successful', response);
        this.user = {};
        this.router.navigate(['/admin']);
      },
      (error) => {
        alert(error.error.message);
        console.error('Registration error', error);
      }
    );
  }

  //back button
  back() {
    this.router.navigate(['/admin']);
  }
}
