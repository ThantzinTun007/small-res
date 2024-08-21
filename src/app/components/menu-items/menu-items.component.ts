import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RestaurantService } from '../../service/restaurant.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrl: './menu-items.component.css',
})
export class MenuItemsComponent {
  selectedFile: File | null = null;

  constructor(
    private http: HttpClient,
    private resService: RestaurantService
  ) {}

  @Input() menuItem: any = {
    name: '',
    description: '',
    price: '',
    category: ''
  };
previewImg = '';
  isFormVisible = false;


  @Input() isEditing: boolean = false; // Add a flag to check if editing
  @Output() formSubmit: EventEmitter<any> = new EventEmitter();

  openForm(menuItem?: any) {
    if (menuItem) {
      this.menuItem = { ...menuItem };
      this.isEditing = true;
    } else {
      this.menuItem = { name: '', description: '', price: '', category: '' , image_url: ''};
      this.isEditing = false;
    }
    this.isFormVisible = true;
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.previewImg = e.target.result;
      };
      reader.readAsDataURL(this.selectedFile);
      const formData = new FormData();
      formData.append('image', this.selectedFile, this.selectedFile.name);
      this.http
        .post<{ filepath: string }>(
          'http://localhost:8080/api/upload',
          formData
        )
        .subscribe(
          (response) => {
            console.log('Response:', response.filepath);
            this.menuItem.image_url = response.filepath;
          },
          (error) => {
            console.error('Error uploading image', error);
          }
        );
    }
  }

  closeForm() {
    this.isFormVisible = false;
  }

  onSubmit() {
    console.log(this.menuItem);
    this.formSubmit.emit(this.menuItem);
    this.closeForm();
  }
}
