import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink,
    NgIf,

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FrontEnd';
  constructor() {}

  logout() {
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('ID');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('password');
    sessionStorage.removeItem('role');
    window.location.href = '/login';
  }

  isLoggedIn(): boolean {
    return sessionStorage.getItem('isLoggedIn') === 'true';
  }
}
