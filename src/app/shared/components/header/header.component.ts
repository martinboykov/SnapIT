import { Component, OnInit } from '@angular/core';

import { AuthService } from './../../../core/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  onLogout() {
    this.authService.signOut();
  }

  get isUserLoggedIn(): boolean{
    return this.authService.authenticated;
  }

}
