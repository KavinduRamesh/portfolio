import { Component } from '@angular/core';

@Component({
  selector: 'app-tech-list',
  templateUrl: './tech-list.component.html',
  styleUrl: './tech-list.component.css'
})
export class TechListComponent {

  feHeader:string = "Frontend Technologies"
  beHeader:string = "Backend Technologies"


  feTechDataArray = [
    {
      techImgUrl: "../../../assets/images/angular.png",
      techName: "Angular"
    },
    {
      techImgUrl: "../../../assets/images/angular.png",
      techName: "React"
    },
    {
      techImgUrl: "../../../assets/images/angular.png",
      techName: "Vue.js"
    },
    {
      techImgUrl: "../../../assets/images/angular.png",
      techName: "Node.js"
    },
    {
      techImgUrl: "../../../assets/images/angular.png",
      techName: "Express.js"
    },
    {
      techImgUrl: "../../../assets/images/angular.png",
      techName: "MongoDB"
    },
    {
      techImgUrl: "../../../assets/images/angular.png",
      techName: "SQL"
    },
    {
      techImgUrl: "../../../assets/images/angular.png",
      techName: "JavaScript"
    },
    {
      techImgUrl: "../../../assets/images/angular.png",
      techName: "TypeScript"
    },
    {
      techImgUrl: "../../../assets/images/angular.png",
      techName: "TypeScript"
    },
    {
      techImgUrl: "../../../assets/images/angular.png",
      techName: "TypeScript"
    },
    {
      techImgUrl: "../../../assets/images/angular.png",
      techName: "TypeScript"
    },
    {
      techImgUrl: "../../../assets/images/angular.png",
      techName: "TypeScript"
    },
    {
      techImgUrl: "../../../assets/images/angular.png",
      techName: "TypeScript"
    },
    // Add more technologies as needed
  ];
  beTechDataArray = [
    {
      techImgUrl: "../../../assets/images/angular.png",
      techName: "Angular"
    },
    {
      techImgUrl: "../../../assets/images/angular.png",
      techName: "React"
    },
    {
      techImgUrl: "../../../assets/images/angular.png",
      techName: "Vue.js"
    },
    {
      techImgUrl: "../../../assets/images/angular.png",
      techName: "Node.js"
    },
    {
      techImgUrl: "../../../assets/images/angular.png",
      techName: "Express.js"
    },
    {
      techImgUrl: "../../../assets/images/angular.png",
      techName: "MongoDB"
    },
    {
      techImgUrl: "../../../assets/images/angular.png",
      techName: "SQL"
    },
    {
      techImgUrl: "../../../assets/images/angular.png",
      techName: "JavaScript"
    },
    {
      techImgUrl: "../../../assets/images/angular.png",
      techName: "TypeScript"
    },
    {
      techImgUrl: "../../../assets/images/angular.png",
      techName: "TypeScript"
    },
    {
      techImgUrl: "../../../assets/images/angular.png",
      techName: "TypeScript"
    },
    {
      techImgUrl: "../../../assets/images/angular.png",
      techName: "TypeScript"
    },
    {
      techImgUrl: "../../../assets/images/angular.png",
      techName: "TypeScript"
    },
    {
      techImgUrl: "../../../assets/images/angular.png",
      techName: "TypeScript"
    },
    // Add more technologies as needed
  ];

}
