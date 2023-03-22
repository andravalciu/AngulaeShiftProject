import { Injectable } from '@angular/core';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { Auth, authState } from '@angular/fire/auth';
import { from, switchMap } from 'rxjs';
import { formatCurrency } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class AuthentificationService {
  currentAdmin$ = authState(this.auth);

  constructor(private auth: Auth) {}

  login(email: string, password: string) {
    return from(signInWithEmailAndPassword(this.auth, email, password));
  }

  adminSignUp(
    fName: string,
    lName: string,
    email: string,
    password: string,
    confirmPassword: string,
    age: string
  ) {
    return from(
      createUserWithEmailAndPassword(this.auth, email, password)
    ).pipe(
      switchMap(({ user }) => updateProfile(user, { displayName: fName }))
    );
  }

  logout() {
    return from(this.auth.signOut());
  }
}
