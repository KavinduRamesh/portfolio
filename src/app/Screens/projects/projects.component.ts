import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  isFlipped = true;

  flipCard() {
    this.isFlipped = !this.isFlipped;
  }
}
