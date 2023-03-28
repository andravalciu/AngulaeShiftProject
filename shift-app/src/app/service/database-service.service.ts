import { Injectable } from '@angular/core';
import { user } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { docData, Firestore } from '@angular/fire/firestore';
import { User } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { from, Observable, of, switchMap } from 'rxjs';
import { AuthentificationService } from './authentification.service';

@Injectable({
  providedIn: 'root',
})
export class DatabaseServiceService {
  /*  get currentUserProfile$(): Observable<User | null> {
    return this.authService.currentUser$.pipe(
      switchMap((user) => {
        if (!user?.uid) {
          return of(null);
        }

        const ref = doc(this.firestore, 'Database', user?.uid);
        return docData(ref) as Observable<User>;
      })
    );
  }
 */
  constructor(
    private firestore: AngularFirestore,
    private authService: AuthentificationService
  ) {}

  async retriveUser(uid: string): Promise<User> {
    let data: User;
    await this.firestore
      .collection('Database')
      .doc(uid)
      .get()
      .forEach((doc) => {
        data = doc.data() as User;
        console.log(data);
      });
    return data;
  }

  /*  addUser(user: User): Observable<any> {
    const ref = doc(this.firestore, 'Database', user?.uid);
    return from(setDoc(ref, user));
  } */
}

// update user function for Edit profile page profile
