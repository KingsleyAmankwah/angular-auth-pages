import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-interest-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './add-interest-page.component.html',
  styleUrl: './add-interest-page.component.css',
})
export class AddInterestPageComponent {
  backgroundImage = '../assets/interest.png';

  interestArray = [
    { name: 'Social Interaction' },
    { name: 'Personal development' },
    { name: 'Entertainment and Fun' },
    { name: 'Rewards and Recognition' },
  ];
}
