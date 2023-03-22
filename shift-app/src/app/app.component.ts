import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from './service/authentification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: any;
  constructor(
    public authService: AuthentificationService,
    private router: Router
  ) {}

  logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/adminlogin']);
    });
  }
}
