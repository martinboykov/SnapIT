import { FirebaseObjectObservable } from 'angularfire2/database';
import { UserData } from '../../shared/models/user';

export interface IAuthService {
    authState: any;

    authenticated: boolean;

    currentUserId: string;

    signupUser(signupForm): any;

    loginUser(email: string, password: string): any;

    signOut(): void;

    resetPassword(email: string): any;

    getUser(key: string): FirebaseObjectObservable<UserData> ;
}
