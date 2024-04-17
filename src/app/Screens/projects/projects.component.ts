import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  header:string = "projects."
  description:string = "Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories in it. If reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.";

  projectData = [
    {
      projectHeader: "header1",
      gitImg: "../../../assets/images/git.png",
      projectImg: "../../assets/images/bg1.jpg",
      projectDesc: "This is the first project description. And i have develop this project usubg these technologies. uploaded to git",
      projTag1: "#Angular",
      projTag2: "#Spring",
      projTag3: "#SQL"
    },
    {
      projectHeader: "header2",
      gitImg: "../../../assets/images/git.png",
      projectImg: "../../assets/images/bg1.jpg",
      projectDesc: "This is the first project description. And i have develop this project usubg these technologies. uploaded to git",
      projTag1: "#React",
      projTag2: "#Node.js",
      projTag3: "#SQL"
    },
    {
      projectHeader: "header3",
      gitImg: "../../../assets/images/git.png",
      projectImg: "../../assets/images/bg1.jpg",
      projectDesc: "This is the first project description. And i have develop this project usubg these technologies. uploaded to git",
      projTag1: "#Vue",
      projTag2: "#Express",
      projTag3: "#SQL"
    },
    {
      projectHeader: "header4",
      gitImg: "../../../assets/images/git.png",
      projectImg: "../../assets/images/bg1.jpg",
      projectDesc: "This is the first project description. And i have develop this project usubg these technologies. uploaded to git",
      projTag1: "#Angular",
      projTag2: "#Spring",
      projTag3: "#SQL"
    },
    {
      projectHeader: "header5",
      gitImg: "../../../assets/images/git.png",
      projectImg: "../../assets/images/bg1.jpg",
      projectDesc: "This is the first project description. And i have develop this project usubg these technologies. uploaded to git",
      projTag1: "#React",
      projTag2: "#Node.js",
      projTag3: "#SQL"
    },
    {
      projectHeader: "header6",
      gitImg: "../../../assets/images/git.png",
      projectImg: "../../assets/images/bg1.jpg",
      projectDesc: "This is the first project description. And i have develop this project usubg these technologies. uploaded to git",
      projTag1: "#Vue",
      projTag2: "#Express",
      projTag3: "#SQL"
    },
  ];
}
