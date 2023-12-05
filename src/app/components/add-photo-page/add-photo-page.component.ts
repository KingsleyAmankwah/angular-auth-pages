import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-photo-page',
  standalone: true,
  imports: [NgIf, RouterLink],
  templateUrl: './add-photo-page.component.html',
  styleUrl: './add-photo-page.component.css',
})
export class AddPhotoPageComponent {
  imageUrl = '../assets/avatar.png';
  showContinueImage = '../assets/Vector.png';
  showContinueButton = false;
  onSelectedFile(e: any) {
    if (e.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.imageUrl = event.target.result;
        this.showContinueButton = true;
      };
    }
  }
}
