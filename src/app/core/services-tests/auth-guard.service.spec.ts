import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthGuard } from '../auth-guard.service';
import { AuthService } from './../auth.service';
import { IAuthService } from './../contracts/auth-servise-interface';
import { MockAuthService } from '../services-mocks/auth.service.mock';

describe('AuthGuardService', () => {
  let service: AuthGuard;
  let authServiceStub: IAuthService;

  beforeEach(() => {
    authServiceStub = new MockAuthService();
    service = new AuthGuard(authServiceStub);
  });

  it('canActivate should return true when authService.authenticated is true', () => {
    authServiceStub.authenticated = true;

    const result = service.canActivate();

    expect(result).toBe(true);
  });

  it('canActivate should return false when authService.authenticated is false', () => {
    authServiceStub.authenticated = false;

    const result = service.canActivate();

    expect(result).toBe(false);
  });
});
