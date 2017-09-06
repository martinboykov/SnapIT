import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMsg: string;
  loginForm: FormGroup;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.buildForm();
  }
  onClickToLogin() {
    this.router.navigate(['/login']);
  }
  onClickToRegister() {
    this.router.navigate(['/register']);
  }

  login() {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    // console.log(email);
    // console.log(password);

    this.authService.loginUser(email, password)
      .then(resolve => this.router.navigate(['/home']))
      .catch(error => this.errorMsg = error.message);
  }

  buildForm(): void {
    this.loginForm = new FormGroup({
      'email': new FormControl('', [Validators.required]),
      'password': new FormControl('', [Validators.required])
    });
    this.loginForm.valueChanges.subscribe((value) => console.log(value));
    this.loginForm.statusChanges.subscribe((value) => console.log(value));
  }



}
