import { Injectable } from '@angular/core';
import { RegistrationResponse, userFormData } from '../types';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  registerUser(formData: userFormData): Observable<RegistrationResponse> {
    console.log(formData);

    return of({
      message: 'User registered successfully',
      status: 200,
    });
  }
}
