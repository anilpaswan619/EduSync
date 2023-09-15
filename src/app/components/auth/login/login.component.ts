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
  isParentClicked = false;
  isStudentClicked = false;
  isTeacherClicked = false;

  toggleParentForm() {
    this.showParentForm = true;
    this.buttonClicked = true;
    this.showButtons = false;
    this.isParentClicked = true;
    this.isStudentClicked = false;
    this.isTeacherClicked = false;
  }
  toggleStudentForm() {
    this.showParentForm = true;
    this.buttonClicked = true;
    this.showButtons = false;
    this.isParentClicked = false;
    this.isStudentClicked = true;
    this.isTeacherClicked = false;
  }

  toggleTeacherForm() {
    this.showParentForm = true;
    this.buttonClicked = true;
    this.showButtons = false;
    this.isParentClicked = false;
    this.isStudentClicked = false;
    this.isTeacherClicked = true;
  }

}
