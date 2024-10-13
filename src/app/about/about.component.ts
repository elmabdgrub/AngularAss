import { Component } from '@angular/core';
import { SkillComponent } from '../skill/skill.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  aboutMe: string = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)";
  basicInfo = {
    name: "Abderrahmane Elm",
    profile: "Web developer",
    email: 'abdelm@mywebsite.com',
    phone: '+123456789'
  };
  skills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 75 },
    { name: 'JavaScript', level: 80 },
    { name: 'Drupal', level: 90 }
  ];
}
