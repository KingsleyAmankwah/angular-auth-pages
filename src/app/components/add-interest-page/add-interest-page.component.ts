import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-interest-page',
  standalone: true,
  imports: [RouterLink, NgClass, NgFor],
  templateUrl: './add-interest-page.component.html',
  styleUrl: './add-interest-page.component.css',
})
export class AddInterestPageComponent {
  backgroundImage = '../assets/interest.png';

  interestArray = [
    {
      name: 'Social Interaction',
      imgPath: '../assets/add.png',
      selectedImgPath: '../assets/add-1.png',
    },
    {
      name: 'Personal development',
      imgPath: '../assets/add.png',
      selectedImgPath: '../assets/add-1.png',
    },
    {
      name: 'Entertainment and Fun',
      imgPath: '../assets/add.png',
      selectedImgPath: '../assets/add-1.png',
    },
    {
      name: 'Rewards and Recognition',
      imgPath: '../assets/add.png',
      selectedImgPath: '../assets/add-1.png',
    },
  ];

  selectedIndex: number | null = null;

  selectInterest(index: number): void {
    if (this.selectedIndex === index) {
      // Deselect the button if it's already selected
      this.selectedIndex = null;
    } else {
      // Select the clicked button
      this.selectedIndex = index;
    }
  }
}
