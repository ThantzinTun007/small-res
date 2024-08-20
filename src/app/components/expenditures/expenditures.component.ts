import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../service/restaurant.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-expenditures',
  templateUrl: './expenditures.component.html',
  styleUrl: './expenditures.component.css'
})
export class ExpendituresComponent implements OnInit{
  expenditures: any[] = [];

  ngOnInit(): void {
    this.getAllExpend();
  }

  constructor(
    private service: RestaurantService, 
    private router: Router,
    private formsModule:FormsModule
  ) {}

  getAllExpend() {
    this.service.getAllExpend().subscribe(
      (response) => {
        console.log(`successfully`, response);
        this.expenditures = response;
      },
      (error) => {
        console.log(error.message || `error`);
      }
    );
  }

  editExpendItem(expendItem: any, expendItemForm: any) {
    expendItemForm.openForm(expendItem);
  }

  deleteExpend(id: number) {
    this.service.deleteOneExpend(id).subscribe(
      (response) => {
        console.log('Menu item deleted successfully', response);
        this.expenditures = this.expenditures.filter(
          (item) => item.expenditure_id !== id
        );
      },
      (error) => {
        console.error('Error deleting menu item', error);
      }
    );
  }

  updateExpendItem(expendItem :any){ 
     this.service.updateExpend(expendItem.expenditure_id,expendItem).subscribe(
      (response)=>{ 
        console.log('Expend item updated successfully',response);
        const index = this.expenditures.findIndex(
          (item) => item.expenditure_id===expendItem.expenditure_id
        );
        if(index>-1){ 
          this.expenditures[index]=expendItem;
        }
      },
      (error)=>{ 
        console.error('Error updating expenditure',error);
      }
     );
  }
  back() {
    this.router.navigate(['/admin']);
  }

  handleFormSubmit(expendItem: any) {
    if (expendItem.expenditure_id) {
      this.updateExpendItem(expendItem);
    } else {
     console.error('please pick one')
    }
  }
}
