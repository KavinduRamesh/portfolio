import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  isFlipped = true;

  flipCard() {
    this.isFlipped = !this.isFlipped;
  }
}
