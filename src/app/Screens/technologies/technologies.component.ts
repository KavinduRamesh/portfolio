import { Component } from '@angular/core';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.css'
})
export class TechnologiesComponent {
  header:string = "technologies."
  description:string = "This is the tech stack that i am going to working ahead.This is the tech stack that i am going to working ahead.This is the tech stack that i am going to working ahead.";
  isFlipped = true;

  flipCard() {
    this.isFlipped = !this.isFlipped;
  }
}
