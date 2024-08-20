import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RestaurantService } from '../../service/restaurant.service';

@Component({
  selector: 'app-expend-form',
  templateUrl: './expend-form.component.html',
  styleUrl: './expend-form.component.css',
})
export class ExpendFormComponent {
  constructor(private service: RestaurantService) {}

  @Input() expendItem: any = {
    description: '',
    amount: '',
    expenditure_date: '',
    category: '',
  };

  @Input() isEditing: boolean = false;
  @Output() formSubmit: EventEmitter<any> = new EventEmitter();

  isFormVisible = false;

  openForm(expendItem?: any) {
    if (expendItem) {
      this.expendItem = { ...expendItem };
      this.isEditing = true;
    } else {
      this.expendItem = {
        description: '',
        amount: '',
        expenditure_date: '',
        category: '',
      };
      this.isEditing = false;
    }
    this.isFormVisible = true;
  }

  closeForm() {
    this.isFormVisible = false;
  }

  onSubmit() {
    this.formSubmit.emit(this.expendItem);
    this.closeForm();
  }
}
