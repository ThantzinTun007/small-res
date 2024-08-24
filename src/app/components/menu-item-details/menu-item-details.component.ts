import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../service/restaurant.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItemsComponent } from '../menu-items/menu-items.component';

@Component({
  selector: 'app-menu-item-details',
  templateUrl: './menu-item-details.component.html',
  styleUrl: './menu-item-details.component.css',
})
export class MenuItemDetailsComponent implements OnInit {
  constructor(
    private service: RestaurantService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  menuItem!: any;
  menuItemId!: any;

  ngOnInit(): void {
    this.menuItemId = this.route.snapshot.paramMap.get('id');

    this.service.getOneMenuitem(this.menuItemId).subscribe((response) => {
      console.log(response), (this.menuItem = response);
      console.log(this.menuItem);
    });
  }

  updateMenuItem(menuItem: any) {
    this.service.updateMenuItem(this.menuItemId, menuItem).subscribe(
      (response) => {
        console.log('Menu item updated successfully', response);
      },
      (error) => {
        console.error('Error updating menu item', error);
      }
    );
  }

  deleteMenuItem(id: number) {
    this.service.deleteOneMunuitem(id).subscribe(
      (response) => {
        this.router.navigate(['/menu']);
      },
      (error) => {
        console.error('Error deleting menu item', error);
      }
    );
  }

  editMenuItem(menuItem: any, menuItemForm: any) {
    menuItemForm.openForm(menuItem);
  }

  handleFormSubmit(menuItem: any) {
    this.updateMenuItem(menuItem);
  }
}
