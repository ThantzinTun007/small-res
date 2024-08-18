import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../service/restaurant.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css'], // Corrected the property name to styleUrls
})
export class UpdatePasswordComponent implements OnInit {
  employeeId!: any;
  oldPassword: string = ''; // Add this
  newPassword: string = ''; // Add this
  confirmPassword: string = ''; // Add this

  constructor(
    private service: RestaurantService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.employeeId = this.route.snapshot.paramMap.get('id');
  }

  updatePassword() {
    if (this.newPassword !== this.confirmPassword) {
      alert("New password and confirm password do not match!");
      return;
    }

    const passwordData = {
      oldPassword: this.oldPassword,
      newPassword: this.newPassword,
    };

    this.service.updatePassword(this.employeeId, passwordData).subscribe(
      (response) => {
        console.log('Password updated successfully!');
        alert(response.message || 'Password updated successfully!');
        this.router.navigate([`/update-info/${this.employeeId}`]);
      },
      (error) => {
        console.log(
          error.message || `Cannot update password for this ${this.employeeId}`
        );
      }
    );
  }
}
