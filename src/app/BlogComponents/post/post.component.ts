import { Component } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  isClicked = true;

  readmore() {
    this.isClicked = !this.isClicked;
  }
}
