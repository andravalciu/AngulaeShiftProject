import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomepageComponent } from './components/homepage/admin-homepage/admin-homepage.component';
import { AdminLoginComponent } from './components/login/admin-login/admin-login.component';
import { AdminRegisterComponent } from './components/register/admin-register/admin-register.component';
import { AdminAllShiftsComponent } from './components/shifts/admin-all-shifts/admin-all-shifts.component';
import { AdminAllWorkersComponent } from './components/workers/admin-all-workers/admin-all-workers.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'adminhomepage',
    pathMatch: 'full',
  },
  {
    path: 'adminhome',
    component: AdminHomepageComponent,
  },
  {
    path: 'adminlogin',
    component: AdminLoginComponent,
  },
  {
    path: 'adminregister',
    component: AdminRegisterComponent,
  },
  { path: 'allshifts', component: AdminAllShiftsComponent },
  { path: 'allworkers', component: AdminAllWorkersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
