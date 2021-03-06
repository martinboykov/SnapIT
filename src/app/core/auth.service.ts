import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import * as firebase from 'firebase';

import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

import { AngularFireAuth } from 'angularfire2/auth';
import { IAuthService } from './contracts/auth-servise-interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { UserData } from './../shared/models/user';

const FIREBASE_AUTH_TOKEN = 'firebase:authUser:AIzaSyC6xFvq9fDz2dBu9q4tIJ9QJiLLyKbTU5g:[DEFAULT]';

@Injectable()
export class AuthService implements IAuthService {
  authState: any = null;
  user: any;
  private authStatusListener = new BehaviorSubject<boolean>(false);
  private basePath = '/users';

  constructor(private angularFireAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private router: Router) {
    this.angularFireAuth.authState.subscribe((auth) => {
      // console.log(auth);

      this.authState = auth; // this.User
    });
  }

  get authenticated(): boolean {
    return this.authState !== null;
  }

  get authenticatedLS(): boolean {
    return this.getAuthData();
  }

  get currentUserId(): string {
    return this.authenticated ? this.authState.uid : '';
  }
  get currentUser(): any {
    return this.authenticated ? this.authState : null;
  }
  private clearAuthData() {
    localStorage.removeItem(FIREBASE_AUTH_TOKEN);
  }

  private getAuthData() {
    let authData = JSON.parse(localStorage.getItem(FIREBASE_AUTH_TOKEN));
    if (!authData) return false;
    // console.log(authData.stsTokenManager);
    authData = authData.stsTokenManager;
    let expirationDate = authData.expirationTime;
    expirationDate = new Date(expirationDate);
    const now = new Date();
    const expiresIn = expirationDate.getTime() - now.getTime();
    if (expiresIn > 0) {
      return true;
    }
    return false;
  }
  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  getUser(key: string): FirebaseObjectObservable<UserData> {
    const usersPath = `${this.basePath}/${key}`;
    this.user = this.db.object(usersPath);
    return this.user;
  }

  signupUser(signupForm) {
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(signupForm.value.email, signupForm.value.password)
      .then((newUser) => {
        this.authState = newUser;
        const path = `users/${this.currentUserId}`;
        const data = {
          email: this.authState.email,
          name: signupForm.value.username
        };
        this.authStatusListener.next(true);
        this.db.object(path).update(data)
          .then((res) => {
            // console.log(res);

          })
          .catch((err) => {
            console.log(err);
          });

      })
      .catch(error => console.log(error));
  }

  loginUser(email: string, password: string) {
    return this.angularFireAuth.auth.signInWithEmailAndPassword(email, password);
    // .then((response) => {
    //   console.log('response', response);

    // })
    // .catch((err) => {
    //   console.log('err', err);
    // });
  }

  signOut(): void {
    this.angularFireAuth.auth.signOut();
    this.clearAuthData();
    this.router.navigate(['/login']);
  }

  resetPassword(email: string) {
    const fbAuth = firebase.auth();
    return fbAuth.sendPasswordResetEmail(email)
      .then(() => {
        // console.log('email sent')
      });
  }
}
