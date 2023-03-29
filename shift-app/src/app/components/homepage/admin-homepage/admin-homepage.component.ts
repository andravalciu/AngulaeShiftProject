import { Component } from '@angular/core';
import { user } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthentificationService } from 'src/app/service/authentification.service';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-admin-homepage',
  templateUrl: './admin-homepage.component.html',
  styleUrls: ['./admin-homepage.component.scss'],
})
export class AdminHomepageComponent {
  user$ = this.authService.currentUser$;

  constructor(
    private authService: AuthentificationService,
    private usersService: UsersService,
    private firestore: AngularFirestore
  ) {}
}
