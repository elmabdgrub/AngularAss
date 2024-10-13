import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrl: './job.component.css'
})
export class JobComponent {
  @Input() jobTitle!: string;
  @Input() jobDates!: string;
  @Input() jobCompany!: string;
  @Input() jobResponsibilities!: string[];
}
