import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMsg: string;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }
  onClickToLogin() {
    this.router.navigate(['/login']);
  }
  onClickToRegister() {
    this.router.navigate(['/register']);
  }

  onLogin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;

    console.log(email);
    console.log(password);

    this.authService.loginUser(email, password)
      .then(resolve => this.router.navigate(['/home']))
      .catch(error => this.errorMsg = error.message);
  }

}
