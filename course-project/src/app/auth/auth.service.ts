import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  token: string;

  constructor(private router: Router) {}

  singupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(
        error => console.log(error)
      );
  }

  singInUser(email: string, password: string) {
    firebase.auth().signInAndRetrieveDataWithEmailAndPassword(email, password)
      .then(
        response => {
          this.router.navigate(['/']); // if auth siccessful, go to home page
          firebase.auth().currentUser.getToken()
            .then(
              (token: string) => this.token = token
            );
          console.log(response);
        }
      )
      .catch(
        error => console.log(error)
      );
  }

  getToken() {
    firebase.auth().currentUser.getToken()
    .then(
      (token: string) => this.token = token
    );
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
  }
}
