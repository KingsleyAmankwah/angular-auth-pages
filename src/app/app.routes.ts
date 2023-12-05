import { Routes } from '@angular/router';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { AddPhotoPageComponent } from './components/add-photo-page/add-photo-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';

export const routes: Routes = [
  { path: 'register', component: RegisterPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'add-photo', component: AddPhotoPageComponent },
];
