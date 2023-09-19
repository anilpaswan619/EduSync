import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component'; 
import { ForgetPasswordComponent } from './components/auth/forget-password/forget-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path : 'home', component : HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }, 
  {path: 'forget-password', component: ForgetPasswordComponent }, 
  {path: 'dashboard', component: DashboardComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
