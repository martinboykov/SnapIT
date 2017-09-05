import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  errorMsg: string;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  // navigation
  onClickToLogin() {
    this.router.navigate(['/login']);
  }
  onClickToRegister() {
    this.router.navigate(['/register']);
  }

  // authorisation
  onSignup(form: NgForm) {
    this.authService.signupUser(form)
      .then(resolve => this.router.navigate(['/home']))
      .catch(error => this.errorMsg = error.message);
  }
}
