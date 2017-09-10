import { FirebaseObjectObservable } from 'angularfire2/database';
import { IAuthService } from '../contracts/auth-servise-interface';
import { UserData } from './../../shared/models/user';

export class MockAuthService implements IAuthService {

    private _authenticated: boolean;

    get authenticated() {
        return this._authenticated;
    }

    set authenticated(value: boolean) {
        this._authenticated = value;
    }

    authState: any;

    currentUserId: string;

    isAuthenticated() {
    }

    signupUser(signupForm: any) {
    }

    loginUser(email: string, password: string) {
    }

    signOut(): void {
    }

    resetPassword(email: string) {
    }

    getUser(key: string): FirebaseObjectObservable<UserData> {
        return new FirebaseObjectObservable<UserData>();
    }
}
