import { Component } from '@angular/core';
import { AuthentificationService } from 'src/app/service/authentification.service';

@Component({
  selector: 'app-admin-homepage',
  templateUrl: './admin-homepage.component.html',
  styleUrls: ['./admin-homepage.component.scss'],
})
export class AdminHomepageComponent {
  user$ = this.authService.currentAdmin$;

  constructor(private authService: AuthentificationService) {}
}
