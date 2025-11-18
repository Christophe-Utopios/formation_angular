import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Formulaire } from './components/formulaire/formulaire';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Formulaire],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('04_formulaires');
}
