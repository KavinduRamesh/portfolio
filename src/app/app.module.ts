import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Screens/home/home.component';
import { PostComponent } from './BlogComponents/post/post.component';
import { TabComponent } from './Screens/tab/tab.component';
import { FormsModule } from '@angular/forms';  
import { MatTabsModule } from '@angular/material/tabs';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NavComponent } from './Components/nav/nav.component';
import { TechnologiesComponent } from './Screens/technologies/technologies.component';
import { ProjectsComponent } from './Screens/projects/projects.component';
import { EducationComponent } from './Screens/education/education.component';
import { CvCardComponent } from './Components/cv-card/cv-card.component';
import { CopyBtnComponent } from './Components/copy-btn/copy-btn.component';
import { ExperienceComponent } from './Screens/experience/experience.component';
import { BlogComponent } from './Screens/blog/blog.component';
import { FooterComponent } from './Components/footer/footer.component';
import { LandingComponent } from './Screens/landing/landing.component';
import { ProjectCardComponent } from './Components/project-card/project-card.component';
import { ExperienceCardComponent } from './Components/experience-card/experience-card.component';
import { AboutComponent } from './Components/about/about.component';
import { TechListComponent } from './Components/tech-list/tech-list.component';
import { Card1Component } from './Components/card1/card1.component';
import { TechBoxComponent } from './Components/tech-box/tech-box.component';
import { NavBlogComponent } from './BlogComponents/nav-blog/nav-blog.component';
import { BlogPostComponent } from './BlogComponents/blog-post/blog-post.component';
import { BlogScreenComponent } from './BlogComponents/blog-screen/blog-screen.component';
import { AboutmeComponent } from './BlogComponents/aboutme/aboutme.component';
import { InternComponent } from './Components/intern/intern.component';
import { AseComponent } from './Components/ase/ase.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TabComponent,
    NavComponent,
    TechnologiesComponent,
    ProjectsComponent,
    EducationComponent,
    CvCardComponent,
    CopyBtnComponent,
    ExperienceComponent,
    BlogComponent,
    FooterComponent,
    LandingComponent,
    ProjectCardComponent,
    ExperienceCardComponent,
    AboutComponent,
    TechListComponent,
    Card1Component,
    TechBoxComponent,
    NavBlogComponent,
    BlogPostComponent,
    BlogScreenComponent,
    AboutmeComponent,
    PostComponent,
    InternComponent,
    AseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatTabsModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
