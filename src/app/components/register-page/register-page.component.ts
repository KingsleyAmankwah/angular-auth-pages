import { Component } from '@angular/core';
// import {
//   FormControl,
//   FormGroup,
//   ReactiveFormsModule,
//   Validators,
// } from '@angular/forms';
import { RouterLink } from '@angular/router';
// import { UserService } from '../../services/user.service';
import { NgIf } from '@angular/common';
// import { userFormData } from '../../types';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css',
})
export class RegisterPageComponent {
  // constructor(private userService: UserService) {}
  // userService = inject(UserService);
  // registerForm = new FormGroup({
  //   name: new FormControl('', Validators.required),
  //   email: new FormControl('', [Validators.required, Validators.email]),
  //   password: new FormControl('', Validators.required),
  // });
  // handleRegisterClick() {
  //   if (this.registerForm.valid) {
  //     const { name, email, password } = this.registerForm.value;
  //     const formData = { name, email, password };
  //   } else {
  //     console.error(
  //       'Form is invalid. Please check error messages below each field.'
  //     );
  //   }
  // }
  // handleRegisterClick() {
  //   if (this.registerForm.valid) {
  //     const { name, email, password } = this.registerForm.value;
  //     const formData: userFormData = {
  //       name: name!,
  //       email: email!,
  //       password: password!,
  //     };
  //     this.userService.registerUser(formData).subscribe(
  //       (response) => {
  //         console.log('User registered successfully:', response);
  //       },
  //       (error) => {
  //         console.error('Error registering user:', error);
  //       }
  //     );
  //   } else {
  //     console.error(
  //       'Form is invalid. Please check error messages below each field.'
  //     );
  //   }
  // }
}
