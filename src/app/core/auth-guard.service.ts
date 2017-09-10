import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Inject, Injectable } from '@angular/core';

import { IAuthService } from './contracts/auth-servise-interface';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(@Inject('IAuthService') private authService: IAuthService) { }

  canActivate() {
    return this.authService.authenticated;
  }
}
