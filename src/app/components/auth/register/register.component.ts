import { Component } from '@angular/core';
import {FormBuilder, Validators, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BreakpointObserver} from '@angular/cdk/layout';
import {StepperOrientation, MatStepperModule} from '@angular/material/stepper';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  showButtons = true;
  showRegForm = false;

  
  toggleRegForm() {
    this.showRegForm = true;
    this.showButtons = false;

  }


 
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
    emailCtrl: ['', [Validators.required, Validators.email]],
    passwordCtrl: ['', Validators.required],
    confirmPasswordCtrl: ['', Validators.required],
    familyIDCtrl: ['', Validators.required],
    occupationCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
    childNameCtrl: ['', Validators.required],
    classCtrl: ['', Validators.required],
    ageCtrl: ['', Validators.required],
    itsNumberCtrl: ['', Validators.required],
    gradeCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
    cityCtrl: ['', Validators.required],
    stateCtrl: ['', Validators.required],
    countryCtrl: ['', Validators.required],
    phoneCtrl: ['', Validators.required],
    workEmailCtrl: ['', [Validators.required, Validators.email]],
  });
  stepperOrientation: Observable<StepperOrientation>;

  constructor(private _formBuilder: FormBuilder, breakpointObserver: BreakpointObserver) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 1100px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }
}
