import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

import { EMAIL_REGEX } from './../../../shared/constants';
import { IAuthService } from '../../../core/contracts/auth-servise-interface';
import { Router } from '@angular/router';
import { ToasterService } from 'angular2-toaster';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMsg: string;
  errorMsgReset: string;
  loginForm: FormGroup;
  toggleReset = false;
  passReset = false; // set to true when password reset is triggered

  constructor(private router: Router,
    @Inject('IAuthService') private authService: IAuthService,
    private toasterService: ToasterService) { }

  ngOnInit() {
    this.buildForm();
  }


  login() {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    // console.log(email);
    // console.log(password);

    this.authService.loginUser(email, password)
      .then(resolve => {
        this.router.navigate(['/home']);
        this.toasterService.pop('success', 'Welcome!');
      }
      )
      .catch(error => this.errorMsg = error.message);
  }

  buildForm(): void {
    this.loginForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.pattern(EMAIL_REGEX)]),
      'password': new FormControl('', [Validators.required])
    });
    this.loginForm.valueChanges.subscribe((value) => console.log(value));
    this.loginForm.statusChanges.subscribe((value) => console.log(value));
  }

  toggleResetPassword() {
    this.toggleReset = true;
  }
  resetPassword() {
    this.errorMsgReset = null;
    this.authService.resetPassword(this.loginForm.value.email)
      .then(() => this.passReset = true)
      .catch(error => this.errorMsgReset = error.message);
  }
  resetForm() {
    this.errorMsgReset = '';
    this.errorMsg = '';
    this.toggleReset = false;
    this.passReset = false;
  }


}
