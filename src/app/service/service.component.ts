import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {
  @Input() serviceIcon!: string;
  @Input() serviceTitle!: string;
  @Input() serviceDescription!: string;
}
