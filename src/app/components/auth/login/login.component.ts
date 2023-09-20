import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  showRegForm = false;
  showPasswordForm = false;
  isParentClicked = false;
  isStudentClicked = false;
  isTeacherClicked = false;

  toggleParentForm() {
  
    this.isParentClicked = true;
    this.isStudentClicked = false;
    this.isTeacherClicked = false;
  }
  toggleStudentForm() {
  
    this.isParentClicked = false;
    this.isStudentClicked = true;
    this.isTeacherClicked = false;
  }

  toggleTeacherForm() {

    this.isParentClicked = false;
    this.isStudentClicked = false;
    this.isTeacherClicked = true;
  }

}
