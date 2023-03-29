import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthentificationService } from 'src/app/service/authentification.service';
import { UsersService } from 'src/app/service/users.service';
import { myUser } from 'src/app/users/user';

@Component({
  selector: 'app-admin-all-workers',
  templateUrl: './admin-all-workers.component.html',
  styleUrls: ['./admin-all-workers.component.scss'],
})
export class AdminAllWorkersComponent implements OnInit {
  workers: any[] = [];
  ngOnInit(): void {
    // Fetch the workers data from Firestore and assign it to the workers property
    this.authService.currentUser$.subscribe((res) => {
      this.firestore
        .collection('Database')
        .doc(res.uid)
        .get()
        .subscribe((e) => {
          const worker = e.data();
          this.workers.push(worker);
        });
    });
  }
  constructor(
    private authService: AuthentificationService,
    private usersService: UsersService,
    private firestore: AngularFirestore
  ) {}
}
