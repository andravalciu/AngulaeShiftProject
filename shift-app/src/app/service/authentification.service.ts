import { Injectable } from '@angular/core';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  User,
} from 'firebase/auth';
import { Auth, authState } from '@angular/fire/auth';
import { from, switchMap } from 'rxjs';
import { formatCurrency } from '@angular/common';
import { Observable } from '@firebase/util';
import { doc, setDoc } from 'firebase/firestore';
import { Firestore } from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class AuthentificationService {
  currentAdmin$ = authState(this.auth);

  constructor(private auth: Auth, private firestore: AngularFirestore) {}

  // addUser(user: User): Observable<any>{
  //   const ref= doc(this.firestore, 'Database', user?.uid)
  //   return from(setDoc(ref,user))
  // }

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
