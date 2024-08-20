import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../service/restaurant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-expend',
  templateUrl: './add-expend.component.html',
  styleUrl: './add-expend.component.css',
})
export class AddExpendComponent implements OnInit {
  expend: any = {
    description: '',
    amount: '',
    expenditure_date: '',
    category: '',
  };

  ngOnInit(): void {}

  constructor(private service: RestaurantService, private router: Router) {}

  // create() {
  //   this.service.register(this.user).subscribe(
  //     (response) => {
  //       alert('Registration successful');
  //       console.log('Registration successful', response);
  //       this.user = {};
  //       this.router.navigate(['/admin']);
  //     },
  //     (error) => {
  //       alert(error.error.message);
  //       console.error('Registration error', error);
  //     }
  //   );
  // }

  create() {
    this.service.addExpend(this.expend).subscribe(
      (response) => {
        alert('Adding expend');
        console.log('Adding expend success', response);
        this.expend = {};
        this.router.navigate(['/expenditure']);
      },
      (error) => {
        alert(error.error.message);
        console.error('Adding isnt work', error);
      }
    );
  }
}
