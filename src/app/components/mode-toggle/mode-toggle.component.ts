import { Component } from '@angular/core';

@Component({
  selector: 'app-mode-toggle',
  templateUrl: './mode-toggle.component.html',
  styleUrls: ['./mode-toggle.component.scss']
})
export class ModeToggleComponent {
  isToggled = false;

  constructor() {

    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
      document.body.classList.add('dark');
    }
  }

  toggleDarkMode() {
    const body = document.body;
    if (body.classList.contains('dark')) {
     
      
      body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
   
      
      body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    this.isToggled = !this.isToggled;
  }
  
 
}
