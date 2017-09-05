import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';


@Injectable()
export class AuthService {
  // token: string;

  constructor(private router: Router, private angularFireAuth: AngularFireAuth) { }

  // signupUser(email: string, password: string) {
  //   firebase.auth().createUserWithEmailAndPassword(email, password)
  //     .catch(
  //     error => console.log(error)
  //     );
  // }
  signupUser(email: string, password: string) {
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password)
      // .then((user) => {
      //   this.authState = user
      //   this.updateUserData()
      // })
      .catch(error => console.log(error));
  }

  loginUser(email: string, password: string) {
    return this.angularFireAuth.auth.signInWithEmailAndPassword(email, password);
  }
  // loginUser(email: string, password: string) {
  //   return this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
  //     // .then((user) => {
  //     //   this.authState = user
  //     //   this.updateUserData()
  //     // })
  //     .catch(error => console.log(error));
  // }

  // signinUser(email: string, password: string) {
  //   firebase.auth().signInWithEmailAndPassword(email, password)
  //     .then(
  //     response => {
  //       this.router.navigate(['/home']);
  //       firebase.auth().currentUser.getToken()
  //         .then(
  //         (token: string) => this.token = token);
  //     })
  //     .catch(
  //     error => console.log(error)
  //     );
  // }

  // logout() {
  //   firebase.auth().signOut();
  //   this.token = null;
  // }

  // getToken() {
  //   firebase.auth().currentUser.getToken()
  //     .then(
  //     (token: string) => this.token = token
  //     );
  //   return this.token;
  // }

  // isAuthenticated() {
  //   return this.token != null;
  // }
}
