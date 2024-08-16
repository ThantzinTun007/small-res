import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../service/restaurant.service';
import { Router } from '@angular/router';
import { MenuItemsComponent } from '../menu-items/menu-items.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent implements OnInit {
  menuitemsList: any[] = [];

  ngOnInit() {
    this.getMenuitems();
  }

  constructor(private resService: RestaurantService, private router: Router) {}


  getMenuitems() {
    this.resService.getAllMenus().subscribe(
      (response) => {
        this.menuitemsList = response;
        console.log(this.menuitemsList);
      },
      (error) => {
        console.error('Error fetching menuitems', error);
      }
    );
  }

  deleteMenuItem(id: number) {
    this.resService.deleteOneMunuitem(id).subscribe(
      response => {
        console.log('Menu item deleted successfully', response);
        this.menuitemsList = this.menuitemsList.filter(item => item.menu_item_id !== id);
      },
      error => {
        console.error('Error deleting menu item', error);
      }
    );
  }

  updateMenuItem(menuItem: any) {
    this.resService.updateMenuItem(menuItem.menu_item_id, menuItem).subscribe(
      (response) => {
        console.log('Menu item updated successfully', response);
        // Update the item in the local list
        const index = this.menuitemsList.findIndex(
          (item) => item.menu_item_id === menuItem.menu_item_id
        );
        if (index > -1) {
          this.menuitemsList[index] = menuItem;
        }
      },
      (error) => {
        console.error('Error updating menu item', error);
      }
    );
  }

  editMenuItem(menuItem: any, menuItemForm: any) {
    menuItemForm.openForm(menuItem);
  }

  createMenuItem(menuItem: any) {
    this.resService.postMenuitem(menuItem).subscribe(
      (response) => {
        console.log('Added a menu item successfully', response);
      },
      (error) => {
        console.error('Error adding', error);
      }
    );
  }

  handleFormSubmit(menuItem: any) {
    if (menuItem.menu_item_id) {
      this.updateMenuItem(menuItem);
    } else {
      this.createMenuItem(menuItem);
    }
  }

  
}
