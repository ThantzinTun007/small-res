import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { RestaurantService } from '../../service/restaurant.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css',
})
export class EmployeeDetailsComponent implements OnInit {
  employeeId!: any;
  employee!: any;

  constructor(
    private service: RestaurantService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.employeeId = this.route.snapshot.paramMap.get('id');
    // alert(this.employeeId);

    this.service.getOneEmployees(this.employeeId).subscribe((response) => {
      console.log(response);
      this.employee = response;
    });
  }

  updateEmployee() {
    var inputData = {
      name: this.employee.name,
      position: this.employee.position,
      salary: this.employee.salary,
      phone: this.employee.phone,
      email: this.employee.email,
    };

    this.service.updateEmployees(this.employeeId, inputData).subscribe(
      (response) => {
        alert('updated successfully!');
        this.router.navigate(['/admin']);
      },
      (error) => {
        console.log(error.message);
      }
    );
  }
}
