import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,RouterOutlet,RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router) {}

  navigateToHome() {
    this.router.navigate(['/welcome']);
  }

  navigateToCreate() {
    this.router.navigate(['/create']);
  }

  navigateToUpdate() {
    this.router.navigate(['/update']);
  }

  navigateToGetAll() {
    this.router.navigate(['/getall']);
  }
}
