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
    // const username = form.value.username;
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signupUser(email, password);
  }
}
