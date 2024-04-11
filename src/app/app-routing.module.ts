import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Screens/home/home.component';
import { ExperienceComponent } from './Screens/experience/experience.component';
import { LandingComponent } from './Screens/landing/landing.component';
import { BlogComponent } from './Screens/blog/blog.component';

const routes: Routes = [
  {path:'', component:  LandingComponent},
  {path:'blog', component:BlogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


  
}
