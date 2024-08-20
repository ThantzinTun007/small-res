import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AdminScreenComponent } from './components/admin-screen/admin-screen.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { AddStaffScreenComponent } from './components/add-staff-screen/add-staff-screen.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuItemsComponent } from './components/menu-items/menu-items.component';
import { UpdatePasswordComponent } from './components/update-password/update-password.component';
import { ExpendituresComponent } from './components/expenditures/expenditures.component';
import { AddExpendComponent } from './components/add-expend/add-expend.component';
import { ExpendFormComponent } from './components/expend-form/expend-form.component';
import { MenuItemDetailsComponent } from './components/menu-item-details/menu-item-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminScreenComponent,
    LoginComponent,
    RegisterComponent,
    EmployeeDetailsComponent,
    AddStaffScreenComponent,
    MenuComponent,
    MenuItemsComponent,
    UpdatePasswordComponent,
    ExpendituresComponent,
    AddExpendComponent,
    ExpendFormComponent,
    MenuItemDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
