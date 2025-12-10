import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [HomeComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-standalone-components';
  isNavbarCollapsed = false;

  constructor(
    private router: Router,
  ) {}

  toggleNavbar() {
      this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  switchNavbar(routerLink: string) {
    this.router.navigate([routerLink]);
    this.toggleNavbar();
  }
}
