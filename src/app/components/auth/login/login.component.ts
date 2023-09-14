import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  showButtons = false;
  buttonClicked = false;
  showParentForm = false;

  toggleParentForm() {
    this.showParentForm = true;
    this.buttonClicked = true;
    this.showButtons = false;
  }
}
