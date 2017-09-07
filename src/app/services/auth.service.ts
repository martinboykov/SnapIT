import { LoginData } from './../shared/models/login';
import { UserData } from './../shared/models/user';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {

  _currentUser = new UserData();
  loggedIn: boolean;

  // authState: any = null;

  constructor(
    private angularFireAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private router: Router) {

    this.angularFireAuth.auth.onAuthStateChanged((user) => {
      this.loggedIn = user !== null;
      if (user) {
        this._currentUser.email = user.email;
        const userDetails = this.db.list('users/', { query: { orderByChild: 'userID', equalTo: user.uid } });
        const newSubscription = userDetails.subscribe((snapshot) => {
          this._currentUser = UserData.fromModel(snapshot[0], this._currentUser);
          newSubscription.unsubscribe();
        });
      } else {
        this._currentUser = new UserData();
      }
    });
  }

  // Returns true if user is logged in
  login(login: LoginData): firebase.Promise<any> {
    return this.angularFireAuth.auth.signInWithEmailAndPassword(login.email, login.password);
  }

  logout(): firebase.Promise<any> {
    this.angularFireAuth.auth.signOut();
    return this.router.navigate(['/home']);
  }

  register(data: LoginData) {
    return this.angularFireAuth.auth
      .createUserWithEmailAndPassword(data.email, data.password)
      .then(({ uid, email }) => {
        return Promise.all([this.db.list('/users'), { uid, email }]);
      })
      .then(([users, details]) => {
        const newUser = new UserData(details.uid, details.email);
        return users.push(newUser);
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  }

  get currentUser(): UserData {
    return this._currentUser;
  }

  resetPassword(email: string) {
    const fbAuth = firebase.auth();
    return fbAuth.sendPasswordResetEmail(email)
      .then(() => console.log('email sent'));
  }
}

