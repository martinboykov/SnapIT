import { Component, Inject, OnInit } from '@angular/core';

import { IAuthService } from '../../../core/contracts/auth-servise-interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(@Inject('IAuthService') private authService: IAuthService) { }

  ngOnInit() {
  }
  onLogout() {
    this.authService.signOut();
  }

  get isUserLoggedIn(): boolean{
    return this.authService.authenticated;
  }

}
