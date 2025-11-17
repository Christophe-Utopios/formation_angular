import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Presentation } from './pages/presentation/presentation';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Presentation],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('01_demo_base');
}
