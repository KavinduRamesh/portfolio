import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tech-box',
  templateUrl: './tech-box.component.html',
  styleUrl: './tech-box.component.css'
})
export class TechBoxComponent {
  @Input() techStackData: any;
  

}
