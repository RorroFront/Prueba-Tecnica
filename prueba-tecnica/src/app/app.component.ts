import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Dashboard1Component } from './dashboard1/dashboard1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Dashboard1Component, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'prueba-tecnica';
}
