import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


  

  ////////////////////////////////////
  
// Add the custom cursor element dynamically (optional)
// const cursor = document.createElement('div');
// cursor.classList.add('custom-cursor');
// document.body.appendChild(cursor);

// Alternatively, use a pre-existing element with class="custom-cursor"

// document.addEventListener('mousemove', (event) => {
//   cursor.style.top = event.clientY + 'px';
//   cursor.style.left = event.clientX + 'px';
// });
