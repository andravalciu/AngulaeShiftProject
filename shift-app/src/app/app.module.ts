import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { AdminRegisterComponent } from './components/register/admin-register/admin-register.component';
import { AdminLoginComponent } from './components/login/admin-login/admin-login.component';
import { AdminHomepageComponent } from './components/homepage/admin-homepage/admin-homepage.component';
import { AdminAllShiftsComponent } from './components/shifts/admin-all-shifts/admin-all-shifts.component';
import { AdminAllWorkersComponent } from './components/workers/admin-all-workers/admin-all-workers.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HotToastModule } from '@ngneat/hot-toast';
import { UserLoginComponent } from './components/login/user-login/user-login.component';
import { UserRegisterComponent } from './components/register/user-register/user-register.component';
import { UserHomepageComponent } from './components/homepage/user-homepage/user-homepage.component';
import { UserShiftsComponentComponent } from './user-shifts-component/user-shifts-component.component';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
// import {AngularFirestore} from '@angular/fire/compat/firestore';
import { FirebaseApp } from '@angular/fire/app/firebase';

@NgModule({
  declarations: [
    AppComponent,
    AdminRegisterComponent,
    AdminLoginComponent,
    AdminHomepageComponent,
    AdminAllShiftsComponent,
    AdminAllWorkersComponent,
    UserLoginComponent,
    UserRegisterComponent,
    UserHomepageComponent,
    UserShiftsComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    AngularFireModule.initializeApp(environment.firebase),
    provideFirestore(() => getFirestore()),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    HotToastModule.forRoot(),
    // AngularFirestore
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
