import { Routes } from '@angular/router';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { AddPhotoPageComponent } from './components/add-photo-page/add-photo-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AddInterestPageComponent } from './components/add-interest-page/add-interest-page.component';
import { GetStartedPageComponent } from './components/get-started-page/get-started-page.component';
import { CongratsPageComponent } from './components/congrats-page/congrats-page.component';

export const routes: Routes = [
  { path: 'register', component: RegisterPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'add-photo', component: AddPhotoPageComponent },
  { path: 'add-interest', component: AddInterestPageComponent },
  { path: 'get-started', component: GetStartedPageComponent },
  { path: 'complete', component: CongratsPageComponent },
];
