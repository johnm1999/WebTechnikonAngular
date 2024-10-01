import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreateOwnerComponent } from "./create-owner/create-owner.component";
import { UptadeOwnerComponent } from "./uptade-owner/uptade-owner.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CreateOwnerComponent, UptadeOwnerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'webtechnikon';
}
