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
import { UserHomepageComponent } from './components/homepage/user-homepage/user-homepage.component';
import { UserLoginComponent } from './components/login/user-login/user-login.component';
import { UserRegisterComponent } from './components/register/user-register/user-register.component';
import { UserShiftsComponentComponent } from './user-shifts-component/user-shifts-component.component';

const redirectToLogin = () => redirectUnauthorizedTo(['adminlogin']);
const redirectToHome = () => redirectLoggedInTo(['adminhome']);
const redirectToUserHome = () => redirectLoggedInTo(['userhome']);
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
  {
    path: 'userhome',
    component: UserHomepageComponent,
    ...canActivate(redirectToLogin),
  },
  {
    path: 'userlogin',
    component: UserLoginComponent,
    ...canActivate(redirectToUserHome),
  },
  {
    path: 'userregistration',
    component: UserRegisterComponent,
    ...canActivate(redirectToUserHome),
  },
  {
    path: 'usershifts',
    component: UserShiftsComponentComponent,
    ...canActivate(redirectToLogin),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
