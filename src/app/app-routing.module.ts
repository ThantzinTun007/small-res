import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminScreenComponent } from './components/admin-screen/admin-screen.component';

const routes: Routes = [
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "logIn", component: LoginComponent},
  {path: "home", component: HomeComponent},
  {path: "register", component: RegisterComponent},
  {path: "admin", component: AdminScreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
