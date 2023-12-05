import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-congrats-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './congrats-page.component.html',
  styleUrl: './congrats-page.component.css',
})
export class CongratsPageComponent {}
