import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  @Input() projectTitle!: string;
  @Input() projectDescription!: string;
  @Input() projectImage!: string;
  @Input() projectLink!: string;
}
