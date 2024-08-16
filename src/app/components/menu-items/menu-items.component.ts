import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RestaurantService } from '../../service/restaurant.service';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrl: './menu-items.component.css',
})
export class MenuItemsComponent {
  constructor(private resService: RestaurantService) {}

  @Input() menuItem: any = {
    name: '',
    description: '',
    price: '',
    category: '',
  };

  isFormVisible = false;

  @Input() isEditing: boolean = false; // Add a flag to check if editing
  @Output() formSubmit: EventEmitter<any> = new EventEmitter();

  openForm(menuItem?: any) {
    if (menuItem) {
      this.menuItem = { ...menuItem };
      this.isEditing = true;
    } else {
      this.menuItem = { name: '', description: '', price: '', category: '' };
      this.isEditing = false;
    }
    this.isFormVisible = true;
  }

  closeForm() {
    this.isFormVisible = false;
  }

  onSubmit() {
    this.formSubmit.emit(this.menuItem);
    this.closeForm();
  }
}
