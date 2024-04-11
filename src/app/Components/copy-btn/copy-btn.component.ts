import { Component } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';


@Component({
  selector: 'app-copy-btn',
  templateUrl: './copy-btn.component.html',
  styleUrl: './copy-btn.component.css'
})
export class CopyBtnComponent {
  detailsToCopy = 'contact: 0769766824  email:kavinduram1@gmail.com';
  copiedMessage = '';

  constructor(private clipboard: Clipboard) {}

  async copyToClipboard() {
    console.log("test");
    
    try {
      await this.clipboard.copy(this.detailsToCopy);
      this.copiedMessage = 'Details copied to clipboard!';
    } catch (err) {
      console.error('Failed to copy:', err);
      this.copiedMessage = 'Copy failed! Please allow clipboard access.';
    }
  }
}
