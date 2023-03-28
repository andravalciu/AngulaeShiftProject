import { Component } from '@angular/core';
import { AuthentificationService } from 'src/app/service/authentification.service';

@Component({
  selector: 'app-user-homepage',
  templateUrl: './user-homepage.component.html',
  styleUrls: ['./user-homepage.component.scss'],
})
export class UserHomepageComponent {
  user$ = this.authService.currentUser$;

  constructor(private authService: AuthentificationService) {}
}
