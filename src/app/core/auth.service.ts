import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';


@Injectable()
export class AuthService {
  authState: any = null;

  constructor(private angularFireAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private router: Router) {

    this.angularFireAuth.authState.subscribe((auth) => {
      this.authState = auth; // this.User
    });
  }
  // Returns true if user is logged in
  get authenticated(): boolean {
    return this.authState !== null;
  }
  // Returns current user UID
  get currentUserId(): string {
    return this.authenticated ? this.authState.uid : '';
  }


  signupUser(signupForm) {
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(signupForm.value.email, signupForm.value.password)
      .then((newUser) => {
        this.authState = newUser;
        // Endpoint on firebase
        const path = `users/${this.currentUserId}`;
        const data = {
          email: this.authState.email,
          name: signupForm.value.username
        };

        this.db.object(path).update(data)
          .catch(error => console.log(error));
      })
      .catch(error => console.log(error));
  }

  loginUser(email: string, password: string) {
    return this.angularFireAuth.auth.signInWithEmailAndPassword(email, password);
  }

  signOut(): void {
    this.angularFireAuth.auth.signOut();
    this.router.navigate(['/home']);
  }

  resetPassword(email: string) {
    const fbAuth = firebase.auth();
    return fbAuth.sendPasswordResetEmail(email)
      .then(() => console.log('email sent'));
  }
}
