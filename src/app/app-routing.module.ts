import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminScreenComponent } from './components/admin-screen/admin-screen.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { AddStaffScreenComponent } from './components/add-staff-screen/add-staff-screen.component';
import { MenuComponent } from './components/menu/menu.component';
import { UpdatePasswordComponent } from './components/update-password/update-password.component';
import { ExpendituresComponent } from './components/expenditures/expenditures.component';
import { AddExpendComponent } from './components/add-expend/add-expend.component';
import { MenuItemDetailsComponent } from './components/menu-item-details/menu-item-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'logIn', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin', component: AdminScreenComponent },
  { path: 'update-info/:id', component: EmployeeDetailsComponent },
  { path: 'update-password/:id', component: UpdatePasswordComponent },
  { path: 'addStaff', component: AddStaffScreenComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'expenditure', component: ExpendituresComponent },
  { path: 'addExpend', component: AddExpendComponent },
  { path: 'menuItemDetails/:id', component: MenuItemDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
