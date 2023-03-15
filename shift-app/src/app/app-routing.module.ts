import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomepageComponent } from './components/homepage/admin-homepage/admin-homepage.component';
import { AdminLoginComponent } from './components/login/admin-login/admin-login.component';
import { AdminRegisterComponent } from './components/register/admin-register/admin-register.component';
import { AdminAllShiftsComponent } from './components/shifts/admin-all-shifts/admin-all-shifts.component';
import { AdminAllWorkersComponent } from './components/workers/admin-all-workers/admin-all-workers.component';
import {
  canActivate,
  redirectUnauthorizedTo,
  redirectLoggedInTo,
} from '@angular/fire/auth-guard';

const redirectToLogin = () => redirectUnauthorizedTo(['adminlogin']);
const redirectToHome = () => redirectLoggedInTo(['adminhome']);

const routes: Routes = [
  {
    path: 'adminhome',
    component: AdminHomepageComponent,
    ...canActivate(redirectToLogin),
  },
  {
    path: 'adminlogin',
    component: AdminLoginComponent,
    ...canActivate(redirectToHome),
  },
  {
    path: 'adminregister',
    component: AdminRegisterComponent,
    ...canActivate(redirectToHome),
  },
  { path: 'allshifts', component: AdminAllShiftsComponent },
  { path: 'allworkers', component: AdminAllWorkersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
