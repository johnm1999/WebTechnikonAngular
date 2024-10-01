import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreateOwnerComponent } from "./create-owner/create-owner.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CreateOwnerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'webtechnikon';
}
