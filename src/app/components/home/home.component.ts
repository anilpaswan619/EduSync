import { Component } from '@angular/core';
import { LoginComponent } from '../auth/login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  showButtons = false;
  buttonClicked = false;
 
  showLogin = false;
  showRegForm = false;
}
