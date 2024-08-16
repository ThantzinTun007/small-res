import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RestaurantService } from '../../service/restaurant.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css',
})
export class EmployeeDetailsComponent {
  constructor(private service: RestaurantService) {}

  @Input() employee: any = {
    name: '',
    position: '',
    salary: '',
    phone: '',
    email: '',
  };

  isFormVisible = false;

  @Input() isEditing: boolean = false; // Add a flag to check if editing
  @Output() formSubmit: EventEmitter<any> = new EventEmitter();

  openForm(employee?: any) {
    if (employee) {
      this.employee = { ...employee };
      this.isEditing = true;
    } else {
      this.employee = {
        name: '',
        position: '',
        salary: '',
        phone: '',
        email: '',
      };
      this.isEditing = false;
    }
    this.isFormVisible = true;
  }

  closeForm() {
    this.isFormVisible = false;
  }

  onSubmit() {
    this.formSubmit.emit(this.employee);
    this.closeForm();
  }
}
