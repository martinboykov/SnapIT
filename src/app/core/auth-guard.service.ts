import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { Inject, Injectable } from '@angular/core';

import { IAuthService } from './contracts/auth-servise-interface';

@Injectable()
export class AuthGuard implements CanActivate {
  private isAuthenticated: boolean;
  constructor(
    @Inject('IAuthService') private authService: IAuthService,
    private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    this.isAuthenticated = this.authService.authenticatedLS;
    if (this.isAuthenticated) {
      return true;
    }
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
  }
}
