import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { LeftNavComponent } from './components/left-nav/left-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './components/home/home.component';
import {FormBuilder, Validators, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BreakpointObserver} from '@angular/cdk/layout';
import {StepperOrientation, MatStepperModule} from '@angular/material/stepper';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {NgSwitch, NgSwitchCase, AsyncPipe} from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule , MatAccordion} from '@angular/material/expansion';
import {NgIf} from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MobileNavComponent} from './components/left-nav/mobile-nav/mobile-nav.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { ModeToggleComponent } from './components/mode-toggle/mode-toggle.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    HeaderComponent,
    LeftNavComponent,
    HomeComponent,
    MobileNavComponent,
    ModeToggleComponent,

   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatIconModule,
    NgSwitch,
    NgSwitchCase,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    AsyncPipe,
    MatCheckboxModule,
    MatCardModule,
    MatExpansionModule,
    MatSidenavModule, 
    NgIf,
    MatDatepickerModule, 
    MatNativeDateModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
