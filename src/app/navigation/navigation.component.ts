import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  @Input() activeMenuItem!: string;
  @Output() menuChange = new EventEmitter<string>();

  setActive(menuItem: string) {
    this.menuChange.emit(menuItem);
  }
}
