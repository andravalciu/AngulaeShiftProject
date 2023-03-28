import { Injectable } from '@angular/core';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  User,
} from 'firebase/auth';
import { Auth, authState } from '@angular/fire/auth';
import { BehaviorSubject, from, switchMap } from 'rxjs';
import { formatCurrency } from '@angular/common';
import { Observable } from '@firebase/util';
import { doc, setDoc } from 'firebase/firestore';
import { Firestore } from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthentificationService {
  currentUser$ = authState(this.auth);

  /* insert(
    uid: string,
    fName: string,
    lName: string,
    email: string,
    password: string,
    confirmPassword: string,
    admin: boolean
  ) {
    this.firestore.collection('Database').doc(uid).set({
      email: email,
      admin: admin,
    });
  } */

  constructor(
    private auth: Auth,
    private firebaseAuth: AngularFireAuth,
    private firestore: AngularFirestore
  ) {}

  // addUser(user: User): Observable<any>{
  //   const ref= doc(this.firestore, 'Database', user?.uid)
  //   return from(setDoc(ref,user))
  // }

  login(email: string, password: string) {
    return from(signInWithEmailAndPassword(this.auth, email, password));
  }

  adminSignUp(email: string, password: string) {
    return from(createUserWithEmailAndPassword(this.auth, email, password));
  }

  logout() {
    return from(this.auth.signOut());
  }
}
