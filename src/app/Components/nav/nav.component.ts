import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
   
  darkTheme:boolean = true;
  WhiteTheme:boolean = false;
  BlueTheme:boolean = false;

  setTheme(theme: string) {
    if(theme == 'dark'){
      this.darkTheme = true;
      this.WhiteTheme = false;
      this.BlueTheme = false;
    }
    else if (theme == 'white'){
      this.darkTheme = false;
      this.WhiteTheme = true;
      this.BlueTheme = false;
    } else {
      this.darkTheme = false;
      this.WhiteTheme = false;
      this.BlueTheme = true;
      
    }
    console.log(this.darkTheme,this.WhiteTheme,this.BlueTheme);
    
  }
}
