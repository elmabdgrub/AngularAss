import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
  activeMenuItem: string = 'home';  
  setActive(menuItem: string) {
    this.activeMenuItem = menuItem;
  }
}