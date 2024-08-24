import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../service/restaurant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent implements OnInit {
  menuitemsList: any[] = [];

  ngOnInit() {
    this.getMenuitems('');
  }

  constructor(private resService: RestaurantService, private router: Router) {}

  getMenuitems(category: string) {
    this.resService.getAllMenus().subscribe(
      (response) => {
        this.menuitemsList = response;
        if (category) {
          this.menuitemsList = this.menuitemsList.filter(
            (item) => item.category == category
          );
        }
      },
      (error) => {
        console.error('Error fetching menuitems', error);
      }
    );
  }

  editMenuItem(menuItem: any, menuItemForm: any) {
    menuItemForm.openForm(menuItem);
  }

  createMenuItem(menuItem: any) {
    console.log(menuItem);
    this.resService.postMenuitem(menuItem).subscribe(
      (response) => {
        console.log('Added a menu item successfully', response);
        this.router.navigate(['/menu']);
      },
      (error) => {
        console.error('Error adding', error);
      }
    );
  }

  handleFormSubmit(menuItem: any) {
    this.createMenuItem(menuItem);
  }
}
